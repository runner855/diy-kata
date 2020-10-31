const booleanToWord = boolean => {

    

    if(boolean === true) {
        return 'Yes';
    } else if(boolean === false) {
        return 'No';
    } else {
        return 'Error';
    } 

    
    
   

};
booleanToWord ("xyz");


module.exports = booleanToWord;
