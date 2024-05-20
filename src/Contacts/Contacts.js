import CarouselTwo from "../CardPrice/CarouselTwo";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import Footer from "../Footer/Footer";
import CountdownTimer from "../Countdown/CountdownTimer";




const HI=styled.h2`
display:flex;
justify-content:center;
margin-left:10%;
margin-top:10%;
font-size:20px;
font-family: "Philosopher", sans-serif;

@media (max-width: 768px) {
  margin-top: 18%; 
  font-size:17px;
}`;


const Join=styled.label`
display:flex;
justfy-conteny:center;
align-items:center;
font-family: "Philosopher", sans-serif;
font-size:19px;
`;

const Form = styled.form`
font-family: "Philosopher", sans-serif;
  padding:5%;
  background-color:white;
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
  margin-bottom:10%;

  
 @media (max-width: 768px) {
  max-width: 370px;
 }`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border:1px solid #B6BBC4;
`;

const TextArea = styled.textarea`
  padding: 5px;
  margin-bottom: 30px;
  height: 120px;
  border:1px solid #B6BBC4;
  `;

const Button = styled.button`
  padding: 10px 5px;
  background-color: #E1AFD1;
  color: white;
  border: none;
  border-radius:3px;
  cursor: pointer;
  font-size:19px;
  font-family: "Philosopher", sans-serif;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;


const Address = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const ContactPosition = styled.div`
margin-top:10%;
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
  
@media screen and (max-width: 765px) {
    flex-direction:column;
    align-items:center;
   }
  `
;

const Oacis=styled.p`
font-size:25px;
font-family: "Philosopher", sans-serif;
color:#222831;
`
;

const Add=styled.p`
font-size:18px;
font-family: "Philosopher", sans-serif;
color:#B4B4B8;
`
;

const MapPosition=styled.div`
display:flex;
justify-content:center;
height:30%;
max-width:100%;
`

;

function Contacts(){

    const [state, handleSubmit] = useForm("xgegyzoo");
  
    if (state.succeeded) {
      return <Join>Thanks for joining!</Join>;
    }
    
    return( <div>
     

<CarouselTwo />

        <ContactPosition>

<Address>
 <Oacis>Оазис Массаж </Oacis>
 <Add>Телефон: 89062396875</Add>
 <Add>Адрес: Суздальская дом 20, Россия, Калининград</Add>
</Address>

<div>
   <HI>
   <p>Обратная связь</p>
   </HI>

    <Form onSubmit={handleSubmit} 
    action="https://formspree.io/f/xgegyzoo"
    method="POST">
      <Label htmlFor="email"></Label>

      <Input placeholder="Ваше имя" id="name" type="name" name="name" />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <Input placeholder="Ваш телефон" id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      
      <TextArea placeholder="Сообщение" id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      
      <Button type="submit" disabled={state.submitting}>Отправить</Button>
    </Form>

</div>


    </ContactPosition>

   
    <iframe src="https://www.google.com/maps/d/embed?mid=12y8VapREvkAG6cluELOUJeEmz6s" width="100%" height="480"></iframe>

<div>
<Footer />

<CountdownTimer />
</div>

    </div>
   

  );
}


export default Contacts;