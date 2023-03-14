import axios from "axios";

const getContacts = async () => {
    const response = await axios.get("http://localhost:4000/contacts");
    return response.data;
  };
  
  export { getContacts };