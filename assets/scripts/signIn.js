const accountName = document.getElementById('name-account');
const passWord = document.getElementById('password');
const checkDisabled = document.getElementById('signIn');
checkDisabled.disabled = true;
let checkAccount,  checkPass;
const checkIsEmptyName = function()
{
    if (!accountName.value)
    {
        accountName.classList.add('is-invalid');
        return true;
    }
    else
    {
        accountName.classList.remove('is-invalid');
        return false;
    }   
}
const checkIsEmptyPass = function()
{

    if (!passWord.value)
    {
        passWord.classList.add('is-invalid');
        return true;
    }
    else
    {
        passWord.classList.remove('is-invalid');
        return false;
    }   
}

accountName.addEventListener( "change", function()
{
    console.log(checkIsEmptyName());
    if( !(checkIsEmptyName() || checkIsEmptyPass()) )
        checkDisabled.disabled = false;
    else
        checkDisabled.disabled = true;
});

passWord.addEventListener('change',function()
{
    console.log(checkIsEmptyPass());
    if( !(checkIsEmptyName() || checkIsEmptyPass()) )
        checkDisabled.disabled = false;
    else
        checkDisabled.disabled = true;
});
