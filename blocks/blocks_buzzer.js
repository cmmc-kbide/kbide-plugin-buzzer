Blockly.Blocks["ky_012_buzzer_block"] = {
    init: function() {
      this.appendDummyInput().appendField("KY-012 BUZZER");
      this.appendDummyInput()
        .appendField("PIN")
        .appendField(new Blockly.FieldTextInput("0"), "KY_012_BUZZER_PIN")
        .appendField("SET STATE")
        .appendField(
          new Blockly.FieldVariable("KY_012_BUZZER_STATE"),
          "KY_012_BUZZER_STATE"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };