// Generated by CoffeeScript 1.6.3
$(function() {
  var config, hztlForm, stdForm;
  config = {
    form: '#standardForm',
    rules: {
      test1: {
        rules: [
          {
            rule: 'required'
          }, {
            rule: 'len',
            min: 2,
            max: 10
          }
        ]
      },
      test2: {
        rules: [
          {
            rule: 'required'
          }
        ]
      }
    }
  };
  stdForm = new Valid8r_BS3(config);
  console.log(stdForm);
  config = {
    form: '#horizontalForm',
    rules: {
      test1_hztl: {
        rules: [
          {
            rule: 'required'
          }, {
            rule: 'len',
            min: 2,
            max: 10
          }
        ]
      },
      test2_hztl: {
        rules: [
          {
            rule: 'required'
          }
        ]
      }
    }
  };
  hztlForm = new Valid8r_BS3(config);
  return console.log(hztlForm);
});
