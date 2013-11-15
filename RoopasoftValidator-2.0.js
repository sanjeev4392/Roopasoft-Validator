var CustomValidator = {
    BtnValidator: function (vBtnSettings) {       
        if (vBtnSettings.BtnId != "") {
            var vBtnSelector = "#" + vBtnSettings.BtnId;
            var vSelector = "#" + vBtnSettings.CtrlId;
            $(vBtnSelector).on("click",(function () {
                $(vSelector).css("background", "none");
                $(vSelector).css("border", "1px solid green");
                $(vSelector).next("span").remove();
                if (vBtnSettings.IsReq) {                   
                    if ($(vSelector).val().length == 0) {
                        $(vSelector).css("background", "#fbcaca");
                        $(vSelector).next('span').remove();
                        $(vSelector).after("<span style='color:red'>Required Field</span>")
                        $(vSelector).css("border", "1px solid red");
                        return false;
                    }
                }
                if (vBtnSettings.Size != 0 && $(vSelector).val().length != 0) {
                    if (vBtnSettings.Condition == "=") {
                        if ($(vSelector).val().length != vBtnSettings.Size) {
                            $(vSelector).css("background", "#fbcaca");
                            $(vSelector).next('span').remove();
                            $(vSelector).after("<span style='color:red'>Entered value Should be of " + vBtnSettings.Size + " characters</span>")
                            $(vSelector).css("border", "1px solid red");
                            return false;
                        }
                    }
                    if (vBtnSettings.Condition == "<") {
                        if ($(vSelector).val().length >= vBtnSettings.Size) {
                            $(vSelector).css("background", "#fbcaca");
                            $(vSelector).next('span').remove();
                            $(vSelector).after("<span style='color:red'>Entered value should be less than" + vBtnSettings.Size + " characters</span>")
                            $(vSelector).css("border", "1px solid red");
                            return false;
                        }
                    }
                    if (vBtnSettings.Condition == ">") {
                        if ($(vSelector).val().length <= vBtnSettings.Size) {
                            $(vSelector).css("background", "#fbcaca");
                            $(vSelector).next('span').remove();
                            $(vSelector).after("<span style='color:red'>Entered value Should be greater than" + vBtnSettings.Size + " characters</span>")
                            $(vSelector).css("border", "1px solid red");
                            return false;
                        }
                    }
                }
                if (vBtnSettings.IsNumber) {
                    if (isNaN($(vSelector).val()) && $(vSelector).val().length != 0) {
                        $(vSelector).css("background", "#fbcaca");
                        $(vSelector).next('span').remove();
                        $(vSelector).after("<span style='color:red'>Enter Number</span>")
                        $(vSelector).css("border", "1px solid red");
                        return false;
                    }
                }
                if (vBtnSettings.IsEmail) {
                    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
                    var emailValid = pattern.test($(vSelector).val());
                    if (emailValid == false && $(vSelector).val().length != 0) {
                        $(vSelector).css("background", "#fbcaca");
                        $(vSelector).next('span').remove();
                        $(vSelector).after("<span style='color:red'>Enter Correct Email ID</span>")
                        $(vSelector).css("border", "1px solid red");
                        return false;
                    }
                }
            }));
        }
    },
    CtrlValidator: function (vSettings)
    {        
        var vSelector = "#" + vSettings.CtrlId;
        $(vSelector).attr("IsValid", false);
        if(vSettings.IsReq== undefined && $(vSelector).val().length==0){
            $(vSelector).attr("IsValid", true);
        }
        $(vSelector).blur(function () {                        
        var IsValid=true;  
            $(vSelector).css("background", "none");
            $(vSelector).css("border", "1px solid green");
            $(vSelector).next("span").remove();    	   
            if (vSettings.IsReq) {
                if ($(vSelector).val().length == 0) {
                    $(vSelector).css("background", "#fbcaca");
                    $(vSelector).next('span').remove();
                    $(vSelector).after("<span style='color:red'>Required Field</span>")
                    $(vSelector).css("border", "1px solid red");
                    IsValid = false;
                }                
            }
            if (vSettings.Size != 0 && $(vSelector).val().length!=0) {
                if (vSettings.Condition == "=") {
                    if ($(vSelector).val().length != vSettings.Size) {
                        $(vSelector).css("background", "#fbcaca");
                        $(vSelector).next('span').remove();
                        $(vSelector).after("<span style='color:red'>Entered value Should be of " + vSettings.Size + " characters</span>")
                        $(vSelector).css("border", "1px solid red");
                        IsValid = false;
                    }
                }
                if (vSettings.Condition == "<") {
                    if ($(vSelector).val().length >= vSettings.Size) {
                        $(vSelector).css("background", "#fbcaca");
                        $(vSelector).next('span').remove();
                        $(vSelector).after("<span style='color:red'>Entered value should be less than" + vSettings.Size + " characters</span>")
                        $(vSelector).css("border", "1px solid red");
                        IsValid = false;
                    }
                }
                if (vSettings.Condition == ">") {
                    if ($(vSelector).val().length <= vSettings.Size) {
                        $(vSelector).css("background", "#fbcaca");
                        $(vSelector).next('span').remove();
                        $(vSelector).after("<span style='color:red'>Entered value Should be greater than" + vSettings.Size + " characters</span>")
                        $(vSelector).css("border", "1px solid red");
                        IsValid = false;
                    }
                }
            }
            if (vSettings.IsNumber)
            {   
                if (isNaN($(vSelector).val()) && $(vSelector).val().length!=0) {
                    $(vSelector).css("background", "#fbcaca");
                    $(vSelector).next('span').remove();
                    $(vSelector).after("<span style='color:red'>Enter Number</span>")
                    $(vSelector).css("border", "1px solid red");
                    IsValid = false;
                }                
            }
            if (vSettings.IsEmail)
            {
                var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);                
                var emailValid=pattern.test($(vSelector).val());
                if (emailValid == false && $(vSelector).val().length != 0) {
                    $(vSelector).css("background", "#fbcaca");
                    $(vSelector).next('span').remove();
                    $(vSelector).after("<span style='color:red'>Enter Correct Email ID</span>")
                    $(vSelector).css("border", "1px solid red");
                    IsValid = false;
                }                
            }
            $(vSelector).attr("IsValid", IsValid);
        });
    }
};