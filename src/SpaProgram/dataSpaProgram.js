import ProgramOne from './IMGProgram/ProgramOne.jpg';
import ProgramTwo from './IMGProgram/ProgramTwo.jpg';
import  bearOne from './IMGProgram/bearOne.jpg';
import  bearTwo from './IMGProgram/bearTwo.jpg';
import TaiSpa from './IMGProgram/TaiSpa.jpg';
import taiSpaTwo from './IMGProgram/taiSpaTwo.jpg';
import spaForGirl from './IMGProgram/spaForGirl.jpg';
import spaForGirlTwo from './IMGProgram/spaForGirlTwo.jpg';
import SpaDateOne from './IMGProgram/SpaDateOne.jpg';
import SpaDateTwo from './IMGProgram/SpaDateTwo.jpg';
import SpaProgramSault from './IMGProgram/SpaProgramSault.jpg';
import SpaProgramFive from './IMGProgram/SpaProgramFive.jpg';



export const dataSpaProgram = [


  {
    id: 1,

    name: `SPA ПРОГРАММА:Жемчужный SPA уход для лица "Pearl Endorfin"`,

    searchTerm: "ForTwo",

    description: `1. Дегустация и подбор косметики в арома-баре`,
    descriptiontwo:  `2. Жемчужный тоник «Минерализация и комфорт»`,
    descriptionthree:  `3. Арома-эссенция по типу кожи`,
    descriptionfour:  `4. Питательная крем-маска «Моделирование»`,

    price: 'Стоимость: 3900 рублей' ,

    image: [ ProgramTwo, ProgramOne]

    
  },


  {
      id: 2,
  
      name: `SPA ПРОГРАММА: Тайское вдохновение`,
  
      searchTerm: "ForOne",
  
      description: `1. Дегустация и подбор косметики в арома-баре`,
      descriptiontwo:  `2. Расслабляющий массаж тела на ароматном крем-масле`,
      descriptionthree:  `3. Нежный солевой пилинг тела «Лемонграсс, вербена, зелёный кофе»`,
      descriptionfour:  `4. Финишный уход Молочной росой «Юдзу и свежая мята»`,
      price: 'Стоимость: 4900 рублей' ,
  
      image: [  taiSpaTwo, TaiSpa ]
  
      
    },


    {
      id: 3,
  
      name: `SPA ПРОГРАММА: Супермен`,
  
      searchTerm: "ForOne",
  
      description: `1. Дегустация и подбор косметики в арома баре`,
      descriptiontwo:  `2. Аква -уход и массаж стоп`,
      descriptionthree:  `3. Расслабляющий арома массаж тела «Имбирь - грейпфрут»`,
      descriptionfour:  `4. Массаж головы`,
  
      price: 'Стоимость: 6900 рублей' ,
  
      image: [ bearOne, bearTwo ]
      
    },

    {
      id: 4,
  
      name: `SPA ПРОГРАММА:Баунти`,
  
      searchTerm: "ForOne",
  
      description: `1. Дегустация и подбор косметики в арома-баре`,
      descriptiontwo:  `2. Расслабляющий массаж на ароматном шоколадном креме`,
      descriptionthree:  `3. Маска для тела «Молочный шоколад»`,
      descriptionfour:  `4. Спа-ритуал молочная роса «Мандарин и базилик`,
  
      price: 'Стоимость: 1900 рублей' ,
  
      image: [ SpaProgramSault, SpaProgramFive]
  
  
      
    },

    {
      id: 5,
  
      name: `SPA ПРОГРАММА:Девичник`,
  
      searchTerm: "Girls",
  
      description: `1. Жемчужный гель для умывания`,
      descriptiontwo:  `2. Жемчужный тоник «Минерализация и комфорт»`,
      descriptionthree:  `3. Арома-эссенция по типу кожи`,
      descriptionfour:  `4. Питательная крем-маска «Моделирование»`,
      price: 'Стоимость: 6900 рублей' ,
  
      image: [ spaForGirl, spaForGirlTwo]
  
  
      
    },


    {
      id: 6,
  
      name: `SPA ПРОГРАММА:Роскошное SPA свидание для двоих"`,
      searchTerm: "ForTwo",
      descriptiont: `Отдых в романтической атмосфере - Шампанское, свечи и лепестки роз.`,
      descriptiontwo:  `1. Дегустация и подбор косметики в арома баре`,
      descriptionthree:  `2. Глубокий массаж на шелковом масле «Дерево Уд И Амбра»`,
      descriptionfour:  `3. Роскошная Маска для тела «Уд-Годжи-Гибискус»`,
      price: 'Стоимость: 14900 рублей' ,
  
      image: [ SpaDateOne, SpaDateTwo]
  
      
    },


]