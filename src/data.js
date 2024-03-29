import axios from "axios";

export const getClients = () =>
  axios
    .get("http://localhost:3000/clientes")
    .then((response) => {
      return response;
    })
    .catch((error) => console.log(error));

export const Clients = [
  {
    id: 1,
    name: "Laura Maria da Silva",
    mail: "laura@gmail.com",
    cpf: "05975314701",
    bloodtype: "A+",
    phone: "1131278784",
    cellphone: "11958156528",
    address: {
      street: "Rua Amadeu Orestes Matera",
      number: "145",
      neighborhood: "Jardim Indpendência",
      locality: "Taubaté",
      state: "SP",
      complement: "",
      cep: "12031610",
    },
  },
  {
    id: 2,
    name: "Thiago Corrêa Diniz",
    mail: "thiago@gmail.com",
    cpf: "05975314702",
    bloodtype: "B+",
    phone: "1231335688",
    cellphone: "12997407121",
    address: {
      street: "Rua Quatro",
      number: "435",
      neighborhood: "Cooperi",
      locality: "Guaratinguetá",
      state: "SP",
      complement: "",
      cep: "12512520",
    },
  },
  {
    id: 3,
    name: "Sarah Maria de Lucena Silva",
    mail: "sarah@hotmail.com",
    cpf: "05975314703",
    bloodtype: "AB+",
    phone: "1231312681",
    cellphone: "12981275481",
    address: {
      street: "Rua Um",
      number: "115",
      neighborhood: "Cooperi",
      locality: "Guaratinguetá",
      state: "SP",
      complement: "",
      cep: "12512500",
    },
  },
  {
    id: 4,
    name: "Stephanie Oliver",
    mail: "stephanie@hotmail.com",
    cpf: "05944014704",
    bloodtype: "A-",
    phone: "1234815681",
    cellphone: "12987151293",
    address: {
      street: "Rua Sete",
      number: "730",
      neighborhood: "Cooperi",
      locality: "Guaratinguetá",
      state: "SP",
      complement: "",
      cep: "12512535",
    },
  },
  {
    id: 5,
    name: "Camila Attico Chirinhan",
    mail: "camila@hotmail.com",
    cpf: "05944014705",
    bloodtype: "B-",
    phone: "1234872705",
    cellphone: "12988766387",
    address: {
      street: "Rua 85",
      number: "430",
      neighborhood: "Maranguape I",
      locality: "Paulista",
      state: "PE",
      complement: "Bloco 08, Apt 505",
      cep: "08665310",
    },
  },
  {
    id: 6,
    name: "Bruna Barbosa Nunes da Silva",
    mail: "bruna@hotmail.com",
    cpf: "05944014706",
    bloodtype: "AB-",
    phone: "1234872705",
    cellphone: "12981751165",
    address: {
      street: "Rua Doutor Sebastião Amaral",
      number: "166",
      neighborhood: "Pau Amarelo",
      locality: "Paulista",
      state: "PE",
      complement: "Casa 07",
      cep: "53433010",
    },
  },
  {
    id: 7,
    name: "Gabriela de Araújo Egídio",
    mail: "gabriela@hotmail.com",
    cpf: "05944014707",
    bloodtype: "O+",
    phone: "1233726249",
    cellphone: "12999999326",
    address: {
      street: "Rua Braz Cubas",
      number: "680",
      neighborhood: "Cidade Edson",
      locality: "Suzano",
      state: "SP",
      complement: "",
      cep: "08665310",
    },
  },
  {
    id: 8,
    name: "Gustavo Rodrigues Pereira",
    mail: "gustavo.rodrigues@gmail.com",
    cpf: "05975314708",
    bloodtype: "A+",
    phone: "1131278784",
    cellphone: "11958156528",
    address: {
      street: "Rua Amadeu Orestes Matera",
      number: "145",
      neighborhood: "Jardim Indpendência",
      locality: "Taubaté",
      state: "SP",
      complement: "",
      cep: "12031610",
    },
  },
  {
    id: 9,
    name: "Gustavo Henrique Souza Dyonísio",
    mail: "gustavo.henrique@gmail.com",
    cpf: "05975314709",
    bloodtype: "B+",
    phone: "1231335688",
    cellphone: "12997407121",
    address: {
      street: "Rua Quatro",
      number: "435",
      neighborhood: "Cooperi",
      locality: "Guaratinguetá",
      state: "SP",
      complement: "",
      cep: "12512520",
    },
  },
  {
    id: 10,
    name: "Kimberly Karoline Ramos da Costa",
    mail: "kinmberly@hotmail.com",
    cpf: "05975314710",
    bloodtype: "A+",
    phone: "1231312681",
    cellphone: "12981275481",
    address: {
      street: "Rua Um",
      number: "115",
      neighborhood: "Cooperi",
      locality: "Guaratinguetá",
      state: "SP",
      complement: "",
      cep: "12512500",
    },
  },
  {
    id: 11,
    name: "José Valdir de Oliveira Neto",
    mail: "jose.valdir@yahoo.com.br",
    cpf: "05944014711",
    bloodtype: "O-",
    phone: "1234815681",
    cellphone: "12987151293",
    address: {
      street: "Rua Sete",
      number: "730",
      neighborhood: "Cooperi",
      locality: "Guaratinguetá",
      state: "SP",
      complement: "",
      cep: "12512535",
    },
  },
];

export const Specialists = [
  {
    id: 1,
    name: "Laura Maria da Silva",
    mail: "laura@clinicapomarola.com",
    register: "CRM-753101",
    phone: "1131278784",
    cellphone: "11958156528",
    profession: {
      id: 8,
      name: "Ginecologista",
    },
    address: {
      street: "Rua Amadeu Orestes Matera",
      number: "145",
      neighborhood: "Jardim Indpendência",
      locality: "Taubaté",
      state: "SP",
      complement: "",
      cep: "12031610",
    },
  },
  {
    id: 2,
    name: "Thiago Corrêa Diniz",
    mail: "thiago@clinicapomarola.com",
    register: "CRM-753102",
    phone: "1231335688",
    cellphone: "12997407121",
    profession: {
      id: 7,
      name: "Ortopedista",
    },
    address: {
      street: "Rua Quatro",
      number: "435",
      neighborhood: "Cooperi",
      locality: "Guaratinguetá",
      state: "SP",
      complement: "",
      cep: "12512520",
    },
  },
  {
    id: 3,
    name: "Sarah Maria de Lucena Silva",
    mail: "sarah@clinicapomarola.com",
    register: "CRM-753103",
    phone: "1231312681",
    cellphone: "12981275481",
    profession: {
      id: 4,
      name: "Urologista",
    },
    address: {
      street: "Rua Um",
      number: "115",
      neighborhood: "Cooperi",
      locality: "Guaratinguetá",
      state: "SP",
      complement: "",
      cep: "12512500",
    },
  },
  {
    id: 4,
    name: "Stephanie Oliver",
    mail: "stephanie@clinicapomarola.com",
    register: "CRM-440104",
    phone: "1234815681",
    cellphone: "12987151293",
    profession: {
      id: 6,
      name: "Endocrinologista",
    },
    address: {
      street: "Rua Sete",
      number: "730",
      neighborhood: "Cooperi",
      locality: "Guaratinguetá",
      state: "SP",
      complement: "",
      cep: "12512535",
    },
  },
  {
    id: 5,
    name: "Camila Attico Chirinhan",
    mail: "camila@clinicapomarola.com",
    register: "CRM-440105",
    phone: "1234872705",
    cellphone: "12988766387",
    profession: {
      id: 8,
      name: "Ginecologista",
    },
    address: {
      street: "Rua 85",
      number: "430",
      neighborhood: "Maranguape I",
      locality: "Paulista",
      state: "PE",
      complement: "Bloco 08, Apt 505",
      cep: "08665310",
    },
  },
  {
    id: 6,
    name: "Bruna Barbosa Nunes da Silva",
    mail: "bruna@clinicapomarola.com",
    register: "CRM-440106",
    phone: "1234872705",
    cellphone: "12981751165",
    profession: {
      id: 6,
      name: "Endocrinologista",
    },
    address: {
      street: "Rua Doutor Sebastião Amaral",
      number: "166",
      neighborhood: "Pau Amarelo",
      locality: "Paulista",
      state: "PE",
      complement: "Casa 07",
      cep: "53433010",
    },
  },
  {
    id: 7,
    name: "Gabriela de Araújo Egídio",
    mail: "gabriela@clinicapomarola.com",
    register: "CRM-440107",
    phone: "1233726249",
    cellphone: "12999999326",
    profession: {
      id: 5,
      name: "Pediátra",
    },
    address: {
      street: "Rua Braz Cubas",
      number: "680",
      neighborhood: "Cidade Edson",
      locality: "Suzano",
      state: "SP",
      complement: "",
      cep: "08665310",
    },
  },
  {
    id: 8,
    name: "Gustavo Rodrigues Pereira",
    mail: "gustavo.rodrigues@clinicapomarola.com",
    register: "CRM-753108",
    phone: "1131278784",
    cellphone: "11958156528",
    profession: {
      id: 4,
      name: "Urologista",
    },
    address: {
      street: "Rua Amadeu Orestes Matera",
      number: "145",
      neighborhood: "Jardim Indpendência",
      locality: "Taubaté",
      state: "SP",
      complement: "",
      cep: "12031610",
    },
  },
  {
    id: 9,
    name: "Gustavo Henrique Souza Dyonísio",
    mail: "gustavo.henrique@clinicapomarola.com",
    register: "CRP-753109",
    phone: "1231335688",
    cellphone: "12997407121",
    profession: {
      id: 3,
      name: "Psicólogo",
    },
    address: {
      street: "Rua Quatro",
      number: "435",
      neighborhood: "Cooperi",
      locality: "Guaratinguetá",
      state: "SP",
      complement: "",
      cep: "12512520",
    },
  },
  {
    id: 10,
    name: "Kimberly Karoline Ramos da Costa",
    mail: "kinmberly@clinicapomarola.com",
    register: "CRM-753110",
    phone: "1231312681",
    cellphone: "12981275481",
    profession: {
      id: 1,
      name: "Clínico Geral",
    },
    address: {
      street: "Rua Um",
      number: "115",
      neighborhood: "Cooperi",
      locality: "Guaratinguetá",
      state: "SP",
      complement: "",
      cep: "12512500",
    },
  },
  {
    id: 11,
    name: "José Valdir de Oliveira Neto",
    mail: "jose.valdir@clinicapomarola.com",
    register: "CRM-440111",
    phone: "1234815681",
    cellphone: "12987151293",
    profession: {
      id: 2,
      name: "Oftalmologista",
    },
    address: {
      street: "Rua Sete",
      number: "730",
      neighborhood: "Cooperi",
      locality: "Guaratinguetá",
      state: "SP",
      complement: "",
      cep: "12512535",
    },
  },
];

export const Profession = [
  { id: 1, name: "Clínico Geral" },
  { id: 2, name: "Oftalmologista" },
  { id: 3, name: "Psicólogo" },
  { id: 4, name: "Urologista" },
  { id: 5, name: "Pediátra" },
  { id: 6, name: "Endocrinologista" },
  { id: 7, name: "Ortopedista" },
  { id: 8, name: "Ginecologista" },
];

export const schedules = [
  {
    hour: "09:00",
    client: "Laura Lima do Val Carneiro",
    specialist: "Roberto carlos da Silva",
  },
  {
    hour: "13:00",
    client: "Bruna Barbosa Nunes da Silva",
    specialist: "Pedro matos da silva",
  },
  {
    hour: "16:00",
    client: "José Weider Pinheiro Neto",
    specialist: "Pedro matos da silva",
  },
];

export const availableTime = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export const Attendances =[
  {   
      id: 1,
      status:'Agendado',
      date_scheduling:'14/06/2021',
      date_attendance:'16/06/2021',
      date_hour:'09:00',
      value:'50,00',
      patient: {
          id: 1,
          name:'Laura Maria da Silva'
      },
      specialist: {
          id: 2,
          name:'Thiago Corrêa Diniz'
      },
  },
  {
      id: 2,
      status:'Agendado',
      date_scheduling:'15/06/2021',
      date_attendance:'17/06/2021',
      date_hour:'10:00',
      value:'50,00',
      patient: {
          id: 2,
          name:'Thiago Corrêa Diniz',
      },
      specialist: {
          id: 3,
          name:'Sarah Maria de Lucena Silva'
      },
  },
  {   
      id: 3,
      status:'Cancelado',
      date_scheduling:'16/06/2021',
      date_attendance:'18/06/2021',
      date_hour:'11:00',
      value:'50,00',
      patient: {
          id: 2,
          name:'Sarah Maria de Lucena Silva',
      },
      specialist: {
          id: 6,
          name:'Bruna Barbosa Nunes da Silva'
      },
  },
  {
      id: 4,
      status:'Realizado',
      date_scheduling:'17/06/2021',
      date_attendance:'18/06/2021',
      date_hour:'09:00',
      value:'50,00',
      patient: {
          id: 4,
          name:'Stephanie Oliver',
      },
      specialist: {
          id: 6,
          name:'Bruna Barbosa Nunes da Silva'
      },
  },
  {
      id: 5,
      status:'Realizado',
      date_scheduling:'18/06/2021',
      date_attendance:'22/06/2021',
      date_hour:'13:00',
      value:'50,00',
      patient: {
          id: 5,
          name:'Camila Attico Chirinhan',
      },
      specialist: {
          id: 8,
          name:'Gustavo Rodrigues Pereira'
      },

  },
  {
      id: 6,
      status:'Cancelado',
      date_scheduling:'11/06/2021',
      date_attendance:'14/06/2021',
      date_hour:'14:00',
      value:'50,00',
      patient: {
          id:'',
          name:'Bruna Barbosa Nunes da Silva',
      },
      specialist: {
          id: 11,
          name:'José Valdir de Oliveira Neto'
      }
  }
];

export const Historic = [
  {
    data: "13/06/2021",
    hour: "14:00",
    profession: "urologista",
    specialist: "Gustavo Moreira Pinto",
    description:
      "Spicy jalapeno bacon ipsum dolor amet bacon venison chuck jowl sirloin, boudin andouille pig meatloaf. T-bone brisket kielbasa salami biltong buffalo. Jowl pork strip steak pig, ribeye kiip bresaola porchetta t-bone short loin short ribs ham hock jerky. Meatball andouille pork chop sausage fatback rump.",
  },
  {
    data: "10/05/2021",
    hour: "10:00",
    profession: "Pediatra",
    specialist: "Katia Oliveira",
    description:
      "Spicy jalapeno bacon ipsum dolor amet bacon venison chuck jowl sirloin, boudin andouille pig meatloaf. T-bone brisket kisa salami biltong buffalo. Jowl pork strip steak pig, ribeye kielbasa cow tail shoulder. Swine capicola porchetta jowl chislic. Pork chop alcatra kielbasa fatback, ball tip bresaola porchetta t-bone short loin short ribs ham hock jerky. Meatball andouille pork chop sausage fatback rump.",
  },
  {
    data: "13/06/2021",
    hour: "14:00",
    profession: "Ortopedista",
    specialist: "Ossolino da Silva",
    description:
      "Spicy jalapeno bacon ipsum dolorlami biltong buffalo. Jowl pork strip steak pig, ribeye kielbasapicola porchetta jowl chislic. Pork chop alcatra kielbasa fatback, ball tip bresaola porchetta t-bone short loin short ribs ham hock jerky. Meatball andouille pork chop sausage fatback rump.",
  },
];
