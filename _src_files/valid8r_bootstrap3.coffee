window.Valid8r_BS3 = Valid8r_BS3 = class Valid8r_BS3 extends Valid8r
    
    constructor: (options) ->
        @bs_options = options.bs_options || {}
        options.callback = @bsCallback if not options.callback
        super options
        
    bsCallback: (field, error) =>
        console.log @options.rules[field]
        r = @options.rules[field];
        $el = $(r.selector);
        $group = $el.parents('.form-group')
        $helpBlock = $group.find('.help-block')
        if error
            $group.removeClass('has-success').addClass('has-error')
            if ($helpBlock.length)
                $helpBlock.html(error)
            else
                h = '<span class="help-block">' + error + '</span>'
                $(h).insertAfter($el)
        else
            $group.removeClass('has-error').addClass('has-success')
            if ($helpBlock.length)
                $helpBlock.remove()
                

        console.log($el)