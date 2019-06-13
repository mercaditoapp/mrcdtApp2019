import React from 'react';
import { Container, Content, } from 'native-base';
import CheckboxGroup from 'react-native-checkbox-group';
export default class Procedimiento extends React.Component{
          state={
            one:false,
            two:false ,
          }
          onePressed(){
            //alert('one');
            this.setState({one:true, two:false})
          };
          twoPressed(){
            //alert('two')
            this.setState({one:false, two:true})
          }
        
          render() {
            return (
              <Container>
              
              <Content>    
              <CheckboxGroup
                      callback={(selected) => { console.log(selected) }}
                      rowDirection={"column"}
                      iconColor={"#5cb85c"}
                      iconSize={30}
                      checkedIcon="ios-checkbox-outline"
                      uncheckedIcon="ios-square-outline"
                    
                      checkboxes={[
                        {
                          label: "Comienze por hacer la masa de la pizza. En un recipiente hondo mezcle el agua caliente con la levadura y permita que descanse 5 minutos.", // label for checkbox item
                          value: 1, // selected value for item, if selected, what value should be sent?
                         
                        },
                        {
                          label: "En un procesador de comida mezcla la harina, el azúcar y la sal. Agrega la levadura y el aceite de oliva y mezclar hasta que obtenga una masa pegajosa.",
                          value: 2
                        },
                        {
                          label: "Espolvoree una superficie limpia con harina y amase la masa hasta que esta ya no se pegue.",
                          value: 3
                        },
                      ]}
                      
                      labelStyle={{
                        flex: 1,
                        color: '#333',
                        marginLeft: 10,
                        marginRight: 10,
                        fontSize: 18,
                        justifyContent: 'center',
                        textAlign: 'left'
                        
                      }}
                      rowStyle={{
                        flex: 1,
                        flexDirection: 'row',
                        padding: 1
                      }} 
                  />
                </Content>
              </Container>
            );
          }
        }