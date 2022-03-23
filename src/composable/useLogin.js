import {ref} from "vue";

var NCMB = require("@/jsConfig/ncmb_js-3.1.3/lib/ncmb");
const apikey ="543e6ee053794c0ebbce6e668e4e86cf17a96dd2e841d3a99a6bc32576d314e0";
const clientkey ="6c53e766837d00a8c4c7254c39c6536d1e1455aeb2dd30a0ee40ba0502375fba";
const ncmb = new NCMB(apikey,clientkey);
  const error =ref(null);
  const isPending =ref(false);
  
  async function loginUser(userName,password){
      const response= await ncmb.User.login(userName,password).then(function(data){
          return true;
        })
        .catch(function(err){
          return false;
        });
  }
  export function useLogin(){
      return {error,isPending,loginUser};
  }
