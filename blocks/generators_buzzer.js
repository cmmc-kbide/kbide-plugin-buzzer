Blockly.JavaScript["ky_012_buzzer_block"] = function(block) {
    var text_ky_012_buzzer_pin = block.getFieldValue("KY_012_BUZZER_PIN");
    var variable_ky_012_buzzer_state = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("KY_012_BUZZER_STATE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
    #VARIABLE
	int KY_012_BUZZER_PIN = ${text_ky_012_buzzer_pin};
	#END
	
	#SETUP
	  pinMode (KY_012_BUZZER_PIN, OUTPUT);
	#END

	${variable_ky_012_buzzer_state} = KY_012_BUZZER_PIN;
    `;
    return code;
  };