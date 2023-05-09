
$(document).ready( 
   function(){
   $.validator.addMethod("validatePassword", function (value, element) {
      return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value);
  }, "Hãy nhập password từ 8 đến 16 ký tự bao gồm chữ hoa, chữ thường và ít nhất một chữ số");
 
   $('#create-acc').validate({
      errorClass: 'invalid-feedback',
      validClass: 'valid-feedback',
      highlight: function(element, errorClass, validClass) {
        $(element).removeClass(validClass).addClass('is-invalid');
        $(element).closest('.form-outline').find('.valid-feedback').remove();
       
      },
      unhighlight: function(element, errorClass, validClass) {
         $(element).removeClass(errorClass).removeClass('is-invalid').addClass('is-valid');
      } ,
      success: function(label, element) {
         $(element).closest('.form-outline').append('<span class="valid-feedback">Đã nhập hợp lệ</span>');
         },
		rules: {
			"account": 
         {
				required: true,
				maxlength: 15
			},
         "email": 
         {
				required: true,
            email : true
			},
         "password":{
            required: true,
            validatePassword : true
         },
         "re-password" :
         {
            required :true,
            equalTo : "#password"
         }
		},
		messages: 
      {
			"account": {
				required: "Bắt buộc nhập tên tài khoản",
				maxlength: "Hãy nhập tối đa 15 ký tự"
            
			},
         "email":{
            required :"Bắt buộc nhập tên email",
            email : "Email không hợp lệ"
         },
         "password":
         {
            required : "Bắt buộc nhập password"
         },
         "re-password":
         {
            required : "Bắt buộc nhập password",
            equalTo: "Hai password phải giống nhau"
         }
		}
   })
   
   
});
