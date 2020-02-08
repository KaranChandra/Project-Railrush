import React from 'react';
import {StyleSheet, Text, View, FlatList , TouchableOpacity} from 'react-native';

const stations = [{name : 'Virar' , 
                    trainsAndTime : [ 
                    {time: '05:55 AM' , trainId: '90124' , start: 'virar' , dest: 'churchgate' } ,
                    {time: '06:07 AM' , trainId: '90134' , start: 'virar' , dest: 'churchgate' } ,
                    {time: '06:44 AM' , trainId: '90172' , start: 'virar' , dest: 'churchgate' } ,
                    {time: '07:35 AM' , trainId: '90242' , start: 'virar' , dest: 'churchgate' } ,
                    {time: '08:06 AM' , trainId: '90284' , start: 'virar' , dest: 'churchgate' } ,
                    {time: '12:25 PM' , trainId: '90576' , start: 'virar' , dest: 'churchgate' } ,
                    {time: '02:21 PM' , trainId: '90688' , start: 'virar' , dest: 'churchgate' } ,
                    {time: '05:01 PM' , trainId: '90862' , start: 'virar' , dest: 'churchgate' } ,
                    {time: '12:05 AM' , trainId: '91256' , start: 'virar' , dest: 'churchgate' } ,

                    {time: '09:19 AM' , trainId: '90199' , start: 'churchgate' , dest: 'virar' } ,
                    {time: '01:20 PM' , trainId: '90515' , start: 'churchgate' , dest: 'virar' } ,
                    {time: '02:10 PM' , trainId: '90565' , start: 'churchgate' , dest: 'virar' } ,
                    {time: '02:49 PM' , trainId: '90601' , start: 'churchgate' , dest: 'virar' } ,
                    {time: '03:34 PM' , trainId: '90639' , start: 'churchgate' , dest: 'virar' } ,
                    {time: '05:18 PM' , trainId: '90741' , start: 'churchgate' , dest: 'virar' } ,
                    {time: '07:37 PM' , trainId: '90885' , start: 'churchgate' , dest: 'virar' } ,
                    {time: '08:37 PM' , trainId: '90965' , start: 'churchgate' , dest: 'virar' } ,
                    {time: '10:49 PM' , trainId: '91135' , start: 'churchgate' , dest: 'virar' } ,
                                      ] , id : '1'} , 
                    // #########################                  
                    {name : 'Vasai' , 
                    trainsAndTime : [ 
                      {time: '06:07 AM' , trainId: '90124' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '06:18 AM' , trainId: '90134' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '06:55 AM' , trainId: '90172' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '07:46 AM' , trainId: '90242' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '08:18 AM' , trainId: '90284' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '12:36 PM' , trainId: '90576' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '02:32 PM' , trainId: '90688' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '05:12 PM' , trainId: '90862' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '12:16 AM' , trainId: '91256' , start: 'virar' , dest: 'churchgate' } ,
  
                      {time: '09:07 AM' , trainId: '90199' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '01:08 PM' , trainId: '90515' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '01:59 PM' , trainId: '90565' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '02:38 PM' , trainId: '90601' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '03:22 PM' , trainId: '90639' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '05:06 PM' , trainId: '90741' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '07:26 PM' , trainId: '90885' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '08:26 PM' , trainId: '90965' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '10:36 PM' , trainId: '91135' , start: 'churchgate' , dest: 'virar' } ,
                                        ] ,  id : '2' } ,
                    // #########################                        
                    {name : 'Bhayander' , 
                    trainsAndTime : [ 
                      {time: '06:18 AM' , trainId: '90124' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '06:28 AM' , trainId: '90134' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '07:06 AM' , trainId: '90172' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '07:57 AM' , trainId: '90242' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '08:29 AM' , trainId: '90284' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '12:47 PM' , trainId: '90576' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '02:43 PM' , trainId: '90688' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '05:22 PM' , trainId: '90862' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '12:26 AM' , trainId: '91256' , start: 'virar' , dest: 'churchgate' } ,
  
                      {time: '08:56 AM' , trainId: '90199' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '12:57 PM' , trainId: '90515' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '01:48 PM' , trainId: '90565' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '02:27 PM' , trainId: '90601' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '03:11 PM' , trainId: '90639' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '04:55 PM' , trainId: '90741' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '07:15 PM' , trainId: '90885' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '08:15 PM' , trainId: '90965' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '10:25 PM' , trainId: '91135' , start: 'churchgate' , dest: 'virar' } ,
                                        ] , id : '3'},
                    // #########################                  
                    {name : 'Dahisar' , 
                    trainsAndTime : [ 
                      {time: '06:28 AM' , trainId: '90124' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '06:37 AM' , trainId: '90134' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '07:15 AM' , trainId: '90172' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '08:06 AM' , trainId: '90242' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '08:29 AM' , trainId: '90284' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '12:56 PM' , trainId: '90576' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '02:52 PM' , trainId: '90688' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '05:31 PM' , trainId: '90862' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '12:35 AM' , trainId: '91256' , start: 'virar' , dest: 'churchgate' } ,
  
                      {time: '08:46 AM' , trainId: '90199' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '12:47 PM' , trainId: '90515' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '01:38 PM' , trainId: '90565' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '02:17 PM' , trainId: '90601' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '03:01 PM' , trainId: '90639' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '04:45 PM' , trainId: '90741' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '07:06 PM' , trainId: '90885' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '08:06 PM' , trainId: '90965' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '10:15 PM' , trainId: '91135' , start: 'churchgate' , dest: 'virar' } ,
                                        ] , id : '4'},
                    // #########################                  
                    {name : 'Borivali' , 
                    trainsAndTime : [ 
                      {time: '06:35 AM' , trainId: '90124' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '06:41 AM' , trainId: '90134' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '07:19 AM' , trainId: '90172' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '08:11 AM' , trainId: '90242' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '08:45 AM' , trainId: '90284' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '01:01 PM' , trainId: '90576' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '02:57 PM' , trainId: '90688' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '05:35 PM' , trainId: '90862' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '12:39 AM' , trainId: '91256' , start: 'virar' , dest: 'churchgate' } ,
  
                      {time: '08:42 AM' , trainId: '90199' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '12:43 PM' , trainId: '90515' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '01:34 PM' , trainId: '90565' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '02:13 PM' , trainId: '90601' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '02:57 PM' , trainId: '90639' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '04:41 PM' , trainId: '90741' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '07:02 PM' , trainId: '90885' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '08:02 PM' , trainId: '90965' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '10:11 PM' , trainId: '91135' , start: 'churchgate' , dest: 'virar' } ,
                                        ] , id : '5'},
                      // #########################                                                        
                    {name : 'Goregaon' , 
                    trainsAndTime : [ 
                      {time: '06:45 AM' , trainId: '90124' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '06:51 AM' , trainId: '90134' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '07:29 AM' , trainId: '90172' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '08:21 AM' , trainId: '90242' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '08:57 AM' , trainId: '90284' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '01:14 PM' , trainId: '90576' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '02:10 PM' , trainId: '90688' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '05:45 PM' , trainId: '90862' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '12:49 AM' , trainId: '91256' , start: 'virar' , dest: 'churchgate' } ,
  
                      {time: '08:29 AM' , trainId: '90199' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '12:30 PM' , trainId: '90515' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '01:21 PM' , trainId: '90565' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '02:00 PM' , trainId: '90601' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '02:44 PM' , trainId: '90639' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '04:28 PM' , trainId: '90741' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '06:48 PM' , trainId: '90885' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '07:48 PM' , trainId: '90965' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '09:58 PM' , trainId: '91135' , start: 'churchgate' , dest: 'virar' } ,
                                        ] , id : '6'},
                      // #########################                  
                    {name : 'Andheri' , 
                    trainsAndTime : [ 
                      {time: '06:55 AM' , trainId: '90124' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '07:01 AM' , trainId: '90134' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '07:39 AM' , trainId: '90172' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '08:31 AM' , trainId: '90242' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '09:07 AM' , trainId: '90284' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '01:24 PM' , trainId: '90576' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '02:20 PM' , trainId: '90688' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '05:54 PM' , trainId: '90862' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '01:00 AM' , trainId: '91256' , start: 'virar' , dest: 'churchgate' } ,
  
                      {time: '08:21 AM' , trainId: '90199' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '12:22 PM' , trainId: '90515' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '01:13 PM' , trainId: '90565' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '01:52 PM' , trainId: '90601' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '02:36 PM' , trainId: '90639' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '04:20 PM' , trainId: '90741' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '06:38 PM' , trainId: '90885' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '07:38 PM' , trainId: '90965' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '09:49 PM' , trainId: '91135' , start: 'churchgate' , dest: 'virar' } ,
                                        ] , id : '7'},
                     // #########################                                                         
                    {name : 'Bandra' , 
                    trainsAndTime : [ 
                      {time: '07:08 AM ' , trainId: '90124' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '07:14 AM' , trainId: '90134' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '07:52 AM' , trainId: '90172' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '08:44 AM' , trainId: '90242' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '09:21 AM' , trainId: '90284' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '01:38 PM' , trainId: '90576' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '02:34 PM' , trainId: '90688' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '06:07 PM' , trainId: '90862' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '01:13 AM' , trainId: '91256' , start: 'virar' , dest: 'churchgate' } ,
  
                      {time: '08:07 AM' , trainId: '90199' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '12:08 PM' , trainId: '90515' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '12:59 PM' , trainId: '90565' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '01:38 PM' , trainId: '90601' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '02:22 PM' , trainId: '90639' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '04:06 PM' , trainId: '90741' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '06:21 PM' , trainId: '90885' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '07:21 PM' , trainId: '90965' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '09:35 PM' , trainId: '91135' , start: 'churchgate' , dest: 'virar' } ,
                                        ] , id : '8'},        
                     // #########################                                                                                                                           
                    {name : 'Dadar' , 
                    trainsAndTime : [ 
                      {time: '07:18 AM' , trainId: '90124' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '07:24 AM' , trainId: '90134' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '08:02 AM' , trainId: '90172' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '08:54 AM' , trainId: '90242' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '09:31 AM' , trainId: '90284' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '01:48 PM' , trainId: '90576' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '02:44 PM' , trainId: '90688' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '06:17 PM' , trainId: '90862' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '01:23 AM' , trainId: '91256' , start: 'virar' , dest: 'churchgate' } ,
  
                      {time: '07:58 AM' , trainId: '90199' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '11:59 AM' , trainId: '90515' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '12:50 PM' , trainId: '90565' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '01:29 PM' , trainId: '90601' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '02:13 PM' , trainId: '90639' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '03:57 PM' , trainId: '90741' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '06:12 PM' , trainId: '90885' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '07:12 PM' , trainId: '90965' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '09:26 PM' , trainId: '91135' , start: 'churchgate' , dest: 'virar' } ,
                                        ] , id : '9'},
                      // #########################                  
                    {name : 'Mumbai Centarl' , 
                    trainsAndTime : [ 
                      {time: '07:29 AM' , trainId: '90124' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '07:35 AM' , trainId: '90134' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '08:13 AM' , trainId: '90172' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '09:05 AM' , trainId: '90242' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '09:42 AM' , trainId: '90284' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '01:59 PM' , trainId: '90576' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '02:55 PM' , trainId: '90688' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '06:28 PM' , trainId: '90862' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '01:34 AM' , trainId: '91256' , start: 'virar' , dest: 'churchgate' } ,
  
                      {time: '07:47 AM' , trainId: '90199' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '11:48 AM' , trainId: '90515' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '12:39 PM' , trainId: '90565' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '01:18 PM' , trainId: '90601' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '02:02 PM' , trainId: '90639' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '03:46 PM' , trainId: '90741' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '06:01 PM' , trainId: '90885' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '07:01 PM' , trainId: '90965' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '09:15 PM' , trainId: '91135' , start: 'churchgate' , dest: 'virar' } ,
                                        ] , id : '10'},
                      // #########################                  
                    {name : 'Marine Lines' , 
                    trainsAndTime : [ 
                      {time: '07:36 AM' , trainId: '90124' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '07:42 AM' , trainId: '90134' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '08:20 AM' , trainId: '90172' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '09:12 AM' , trainId: '90242' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '09:49 AM' , trainId: '90284' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '02:06 PM' , trainId: '90576' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '03:02 PM' , trainId: '90688' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '06:35 PM' , trainId: '90862' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '01:41 AM' , trainId: '91256' , start: 'virar' , dest: 'churchgate' } ,
  
                      {time: '07:40 AM' , trainId: '90199' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '11:41 AM' , trainId: '90515' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '12:32 PM' , trainId: '90565' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '01:11 PM' , trainId: '90601' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '01:55 PM' , trainId: '90639' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '03:39 PM' , trainId: '90741' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '05:54 PM' , trainId: '90885' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '06:54 PM' , trainId: '90965' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '09:08 PM' , trainId: '91135' , start: 'churchgate' , dest: 'virar' } ,
                                        ] , id : '11'},
                      // #########################                  
                    {name : 'Churchgate' , 
                    trainsAndTime : [ 
                      {time: '07:40 AM' , trainId: '80124' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '07:46 AM' , trainId: '80134' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '08:24 AM' , trainId: '80172' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '09:15 AM' , trainId: '90242' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '09:53 AM' , trainId: '90284' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '02:10 PM' , trainId: '90576' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '03:06 PM' , trainId: '90688' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '06:39 PM' , trainId: '90862' , start: 'virar' , dest: 'churchgate' } ,
                      {time: '01:45 AM' , trainId: '91256' , start: 'virar' , dest: 'churchgate' } ,
  
                      {time: '07:36 AM' , trainId: '90199' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '11:38 AM' , trainId: '90515' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '12:29 PM' , trainId: '90565' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '01:08 PM' , trainId: '90601' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '01:52 PM' , trainId: '90639' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '03:36 PM' , trainId: '90741' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '05:51 PM' , trainId: '90885' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '06:51 PM' , trainId: '90965' , start: 'churchgate' , dest: 'virar' } ,
                      {time: '09:05 PM' , trainId: '91135' , start: 'churchgate' , dest: 'virar' } ,
                                        ] , id : '12'},                                                              
                                  ]

                                    
export default function Page4({ navigation }) {
    console.log('-------------------------------'+navigation.getParam('station'));
    const currentStation = navigation.getParam('station');
    const virar = navigation.getParam('virar')
    const churchgate = navigation.getParam('churchgate')
    let trainsArr = []

    const getTrains = (currentStation,dest)=>{
      stations.forEach((station , index)=>{
        if(station.name.valueOf() == currentStation.valueOf())
          station.trainsAndTime.forEach((train,index)=>{
            if(train.dest.valueOf() == dest.valueOf())
              trainsArr.push(train)
          })
      })
    }

    if(virar){
      getTrains(currentStation,"virar")
      console.log(trainsArr)
      // populateCount()
    }else{
      getTrains(currentStation,"churchgate")
      console.log(trainsArr)
      // populateCount(1)
    }

     //  const populateCount = ()=>{
    //  trainsArr.forEach((train,index)=>{
      //  train['count'] = getCount(train.trainId)
      //})
    //}

    //const getCount = async (trainId)=>{
     // try {
       // let count = await fetch('http://railrush-env-1.dcc9sri2y2.us-east-1.elasticbeanstalk.com/crowdCount/'+trainId)
        //console.log(""+count)
        //return count
      //} catch (error) {
        //console.log(""+error)
     // }
    //}

    return (
      <View style={styles.container}>
        <FlatList 
          data = { trainsArr }
          keyExtractor = {(item) => item.trainId}
          renderItem = {({item}) => (
          <Text style={styles.txt}> {"  "}{item.time} {" \t"}{item.start} {" --- "}{item.dest}  {"\t   Ct"}</Text>
          )} />
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      paddingTop: 1,
      paddingHorizontal : 10
    },
    txt:{
      paddingTop: 10,
      paddingBottom:10,
      paddingLeft : 5,
      paddingRight: 20,
      textAlign : "center",
      backgroundColor: '#fff',
      fontSize : 18,
      marginTop : 7,
      borderRadius : 5,
      fontWeight : "bold"
    },
  }); 