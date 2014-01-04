// Generated by CoffeeScript 1.6.3
var Valid8r_BS3,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

window.Valid8r_BS3 = Valid8r_BS3 = Valid8r_BS3 = (function(_super) {
  __extends(Valid8r_BS3, _super);

  function Valid8r_BS3(options) {
    this.bsCallback = __bind(this.bsCallback, this);
    this.bs_options = options.bs_options || {};
    if (!options.callback) {
      options.callback = this.bsCallback;
    }
    Valid8r_BS3.__super__.constructor.call(this, options);
  }

  Valid8r_BS3.prototype.bsCallback = function(field, error) {
    var $el, $group, $helpBlock, h, r;
    console.log(this.options.rules[field]);
    r = this.options.rules[field];
    $el = $(r.selector);
    $group = $el.parents('.form-group');
    $helpBlock = $group.find('.help-block');
    if (error) {
      $group.removeClass('has-success').addClass('has-error');
      if ($helpBlock.length) {
        $helpBlock.html(error);
      } else {
        h = '<span class="help-block">' + error + '</span>';
        $(h).insertAfter($el);
      }
    } else {
      $group.removeClass('has-error').addClass('has-success');
      if ($helpBlock.length) {
        $helpBlock.remove();
      }
    }
    return console.log($el);
  };

  return Valid8r_BS3;

})(Valid8r);
