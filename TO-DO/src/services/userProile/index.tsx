var UserProfile = (function() {
    var full_name = "";
    var id = "";
  
    var getName = function() {
      return full_name;    
    };
  
    var setName = function(name: string) {
      full_name = name;     
     
    };
      var getId = function() {
        return id;   
      };   
      var setId = function(_id: string) {
        id = _id;           
      }; 
    return {
      getName: getName,
      setName: setName,
      getId: getId,
      setId: setId,
    }
  
  })();
  
  export default UserProfile;