Blockly.Blocks['ky_012_buzzer_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("KY-012 BUZZER");
    this.appendValueInput("KY_012_BUZZER_PIN")
        .setCheck("Number")
        .appendField("PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};