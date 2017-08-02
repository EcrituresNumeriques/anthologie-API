#!/bin/bash

#flush existing iptables rules
iptables -F INPUT

#allow local redis connections
iptables -A INPUT -s localhost -p tcp -m tcp --dport 6379 -j ACCEPT
#Block redis connections
iptables -A INPUT -p tcp -m tcp --dport 6379 -j DROP

#allow local redis connections
iptables -A INPUT -s localhost -p tcp -m tcp --dport 3306 -j ACCEPT
#Block redis connections
iptables -A INPUT -p tcp -m tcp --dport 3306 -j DROP

#permanence
bash -c 'iptables-save > /etc/sysconfig/iptables'
