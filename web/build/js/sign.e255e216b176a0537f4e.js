webpackJsonp([12],{i6od:/*!***************************!*\
  !*** ./assets/js/sign.js ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
function(e,r,s){"use strict";(function(e){var r=s(/*! ../modules/util.js */"Jov0");!function(e){e&&e.__esModule}(r);s(/*! module/common.js */"6vhR"),s(/*! jquery-validation */"f9KE"),function(){var r=e("#login-form");r.validate({errorPlacement:function(r,s){r.insertAfter(e(s).parent())},rules:{_username:{required:!0},_password:{required:!0}},messages:{_username:{required:"请输入用户名或者邮箱"},_password:{required:"请输入密码!"}}})}(),function(){e("#register-form").validate({errorPlacement:function(r,s){"checkbox"==e(s).attr("type")?e("#for_policy").append(r):r.insertAfter(e(s).parent())},rules:{"fos_user_registration_form[username]":{required:!0,rangelength:[2,15]},"fos_user_registration_form[email]":{required:!0,email:!0},"fos_user_registration_form[plainPassword][first]":{required:!0,rangelength:[6,15]},"fos_user_registration_form[plainPassword][second]":{required:!0,equalTo:"#fos_user_registration_form_plainPassword_first"},agree_policy:{required:!0}},messages:{"fos_user_registration_form[username]":{required:"请输入用户名",rangelength:"用户名在2到15位之间"},"fos_user_registration_form[email]":{required:"请输入邮箱",email:"邮箱格式错误"},"fos_user_registration_form[plainPassword][first]":{required:"请输入密码!",rangelength:"密码在6到15位之间"},"fos_user_registration_form[plainPassword][second]":{required:"请再次输入密码!",equalTo:"密码不一致"},agree_policy:{required:"请先同意条款!"}}})}(),function(){e("#forgot-form").validate({errorClass:"error-message",errorPlacement:function(r,s){r.insertAfter(e(s).prev())},rules:{email:{required:!0,email:!0},captcha:{required:!0}},messages:{email:{required:"请输入账号绑定的邮箱",email:"邮箱格式错误"},captcha:{required:"请输入验证码"}}})}(),function(){e("#resetting-form").validate({errorClass:"error-message",errorPlacement:function(r,s){r.insertAfter(e(s).prev())},rules:{password:{required:!0,rangelength:[6,15]},repassword:{required:!0,equalTo:"#password",rangelength:[6,15]},code:{required:!0}},messages:{password:{required:"请输入新密码!",rangelength:"密码在6到15位之间"},repassword:{required:"请重复新密码!",equalTo:"重复密码不一致",rangelength:"密码在6到15位之间"},code:{required:"请输入验证码"}}})}(),function(e){e("#bind-register-form").validate({errorClass:"error-message",errorPlacement:function(r,s){e("#for_new_"+e(s).attr("name")).append(r)},rules:{username:{required:!0},agree_policy:{required:!0}},messages:{username:{required:"请输入用户名"},agree_policy:{required:"请先同意条款!"}}}),e("#bind-login-form").validate({errorClass:"error-message",errorPlacement:function(r,s){e("#for_"+e(s).attr("name")).append(r)},rules:{username:{required:!0},pwd:{required:!0}},messages:{username:{required:"请输入用户名"},pwd:{required:"请输入密码!"}}})}(e)}).call(r,s(/*! jquery */"0iPh"))}},["i6od"]);