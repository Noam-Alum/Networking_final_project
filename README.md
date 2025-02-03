# Networking final project
 
![Hero](https://monaghesatiran.ir/wp-content/uploads/2023/11/%D8%B1%D8%A7%D9%87-%D8%A7%D9%86%D8%AF%D8%A7%D8%B2%DB%8C-%D9%85%D9%86%D8%B7%D9%82%D9%87-%D8%A2%D8%B2%D8%A7%D8%AF-%D9%85%D8%B4%D8%AA%D8%B1%DA%A9-%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF-ICT-%D9%85%DB%8C%D8%A7%D9%86-%DA%A9%D8%B4%D9%88%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-%D9%88-%D8%B9%D8%B1%D8%A7%D9%82.jpg)

### Flip books

- [Book preview](https://heyzine.com/flip-book/34211829ae.html)
  
### Need to remember:

- **Cisco Packet Tracer version:** `8.2.2.0400`
  
  > For routers and switchs using an AAA server
  > 
  > - **Username**: admin
  > - **Password**: 1234

# Change log

## Packet Tracer

> [!WARNING]
> While using SVI in the routers that used **HWIC-4ESW** is the only option (other than using other routers) it does cause *native VLAN mismatch* issue.
>
> My take is that in this specific case, where the connection is **only between two routers** and involves **untagged traffic** on a **P2P link**, the **native VLAN mismatch** is not problematic.
> The routers will still communicate correctly as long as the IP addressing and routing are set up properly, there is no risk of traffic being improperly tagged or misrouted, and no broadcast or other VLAN-related issues will arise.
>
> - **HWIC-4ESW** has only **L2** interfaces.

| Date   | What has changed?                                                                                                   |
| ------ | ------------------------------------------------------------------------------------------------------------------- |
| Oct 14 | Three simple *ROS* buildings in Europe. (I'm done with Europe)                                                      |
| Oct 16 | Added images to each cluster.                                                                                       |
| Oct 25 | Added a complex building, including [HTML project website](https://project.alum.sh), HSRP, DHCP Server, DNS server. |
| Oct 25 | Added port-security to complex building.                                                                            |
| Oct 26 | Duplicated complex building to India.                                                                               |
| Oct 30 | Duplicated simple building to Japan. (After configuring AAA, I'm done with Asia + Australia)                        |
| Nov 4  | Changed all routers in Complex topologies to PT-EMPTY                                                               |
| Nov 5  | Changed all core switches to PT-EMPTY                                                                               |

### TODO

- [x] DTP on one building.

- [x] VTP on one building.

- [x] SSH on all devices.

- [x] AAA servers.

- [x] Swap routers on complex buildings to 6200 routers.

- [x] Swap all Core switches to PT empty

<br><hr><br>

## Book report

| Date   | What has changed?                                                                                                                            |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Oct 16 | Added organizational chart for each continent.                                                                                               |
| Oct 30 | Added pages regarding all simple buildings and the buildings in Australia and India.                                                         |
| Oct 31 | Added pages on SSH and TELNET and changed first building (simple) pages to include Japan and Virginia                                        |
| Nov 3  | Removed pages Yoel didnt like, and changed how the project looks, currently at 30%-ish done with fixing the book report for *Yoels likings*. |

### TODO

- [x] Stuff to re-write:
  
  - [x] Vlan
    
    > Write the commands I ran in PT for one of the buildings and show the distribution.
  
  - [x] VTP
    
    > Very important to document every command and show it works.
  
  - [x] Vlan hopping
    
    > Need to write a POC.
  
  - [x] DHCP
    
    > Same as Vlan, show creation of DHCP pools for each floor and show how it distributes over the building.
  
  - [x] DHCP spoofing
    
    > Need a POC.
  
  - [x] Router on a stick
    
    > Check what Baron did and do the same.
  
  - [x] STP
    
    > - Write about STP load-balancing, write the commands like Vlan, then Show commands.
    > 
    > - Write about STP attacks and then show PORTFAST + BPDU GUARD.
  
  - [x] EtherChannle
    
    > Write the commands I ran like Vlan.
  
  - [x] HSRP
  
  - [x] DTP
    
    > - What is it.
    > - How to configure with commands I ran in PT.
    > - Show commands.
    > - DTP attack
    > - How to protect.
  
  - [x] VTP
    
    > - What is it.
    > - How to configure with commands I ran in PT.
    > - Show commands.
    > - 
  
  - [x] Telnet
    
    > Check what Baron did.
  
  - [x] SSH
    
    > Check what Baron did.
  
  - [x] Servers (DHCP, DNS, HTTP, etc)
    
    > Make it prettier.

- [ ] Stuff to write:
  
  - [ ] SQL injections.
    
    > Explanation & POC
  
  - [x] XSS attack.
    
    > Explanation & POC
  
  - [ ] Ransomware.
    
    > Explanation & POC
  
  - [ ] Zero day.
    
    > Explanation & POC
  
  - [ ] Brute Force Attack.
    
    > Explanation & POC
  
  - [ ] DNS Spoofing.
    
    > Explanation & POC
  
  - [ ] Network sniffing.
    
    > Explanation & POC

### To be added - WAN

- [ ] Static Routing , Dynamic Routing
- [ ] WIFI - Wireless Networks
- [ ] WAN
- [ ] VPN
- [ ] IPSec
- [ ] BGP
- [ ] ACL
- [ ] EIGRP
- [ ] OSPF
- [ ] NAT
