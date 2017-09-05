import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import {store} from '../../Redux/store'


export let perseus = function(){
  let value = document.querySelector("#perseusURI").value;
  //check if this is a perseus URI
  if(value.startsWith('http://data.perseus.org/citations/'))
  {
    fetch('/api/v1/uris/'+encodeURIComponent(value))
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      if(json.length>0){
        //console.log(json);
        browserHistory.push('/entities/'+json[0].id_entity.id_entity);
      }
      else{
        //check if user is logged in
        if(store.getState().user){
          console.log("no URI found, creating new text");
          fetch(value+'/xml')
          .then(function(response){
            return response.text();
          })
          .then(function(response){
            //read XML and create entities + URI + authors
            let parser = new DOMParser();
            let xml = parser.parseFromString(response,"text/xml");

            let title = xml.getElementsByTagName("cts:title")[0].childNodes[0].nodeValue + ' ' + xml.getElementsByTagName("cts:psg")[0].childNodes[0].nodeValue;
            let text = xml.getElementsByTagName("p")[0].textContent;

            //create new entity
            let corps = {title:title}
            fetch("/api/v1/entities/",
              {
                  method: "POST",
                  body: JSON.stringify(corps),
                  credentials: 'same-origin'
              })
              .then(function(res){
                if(!res.ok){throw res.json();}
                return res.json()
              })
              .then(function(data){

                let resolveFirst = []
                //add text
                let corpsText = {id_entity:data.id_entity,text_translated:text,id_language:8}
                resolveFirst.push(
                  fetch("/api/v1/entities/"+data.id_entity+"/translations",
                    {
                        method: "POST",
                        body: JSON.stringify(corpsText),
                        credentials: 'same-origin'
                    })
                    .then(function(res){
                      if(!res.ok){throw res.json();}
                      return res.json()
                    })
                );
                //add URI
                let corpsURI = {id_entity:data.id_entity,value:value,id_urid_source:1}
                resolveFirst.push(
                  fetch("/api/v1/entities/"+data.id_entity+"/uris",
                    {
                        method: "POST",
                        body: JSON.stringify(corpsURI),
                        credentials: 'same-origin'
                    })
                    .then(function(res){
                      if(!res.ok){throw res.json();}
                      return res.json()
                    })
                    .then(function(data){
                      browserHistory.push('/entities/'+corps.id_entity);
                      return null;
                    })
                )

                browserHistory.push('/entities/'+data.id_entity);
                return null;
              })


            console.log(title,text);
          })
        }
        else{
          alert('this URI was not found on anthologia, You need to be logged in to import it from Perseus');
        }

      }
    });
  }
  else{
     alert('not a valid Perseus URI, must be in the following format : http://data.perseus.org/citations/<URN>');
  }
}
