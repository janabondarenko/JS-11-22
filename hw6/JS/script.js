// преобразовывает имя в правильный формат 

const upperCaseString = (userString) =>{

    const firstSymbolString = (userString [0]).toUpperCase();
    const symbolsString = (userString.slice(1)).toLowerCase();

    return firstSymbolString + symbolsString;
   
}

//Спрашивает и проверяет имя 

const userRegistrationName = () => {
    let userName

    do{
        userName = prompt('Введите Ваше имя:');
        
        if(!userName){
            alert('Введите один строчный символ')
        }else{
            break}

        }while(true);
        const upperCaseName = upperCaseString(userName)

        return upperCaseName
};

//Спрашивает и проверяет фамилию

const userRegistrationLastName = () => {
    let userLastName

    do{
        userLastName = prompt('Введите Вашу фамилию:');
        
        if(!userLastName){
            alert('Введите один строчный символ')
        }else{
            break}
            
        }while(true);
        const upperCaseLastName = upperCaseString(userLastName)

        return upperCaseLastName
    };

    //Спрашивает и проверяет пароль

const userRegistrationPassword = () => {
    let userPassword

    do{
        userPassword = prompt('Придумайте пароль:');
        
        if(!userPassword || userPassword.length < 6){
            alert('Введите не менее 6 цифр')
            
        }else if (!isNan(userPassword)|| userPassword.toLowerCase()=== userPassword || userPassword.toUpperCase()=== userPassword){
            alert ('не корректный пароль')
        }else{
                alert ('Регистрация прошла успешно!')
                break
            }
            
        }while(true);
        

        return upperCaseLastName
    };


const resName = userRegistrationName();
const resLastName = userRegistrationLastName();
const resPassword = userRegistrationPassword();

alert ('Вы зарегистрировались под именем и фамилией: ${resName} ${resLatName} Ваш пароль: ${resPassword}');
