document.addEventListener('DOMContentLoaded', function () {

    function updatePlaceholder(inputId, labelId) {
        const fileInput = document.getElementById(inputId);
        const fileLabel = document.getElementById(labelId);
        
        if (fileInput.files.length > 0) {
            fileLabel.textContent = fileInput.files[0].name;
        } else {
            fileLabel.textContent = 'Escolher arquivo'; 
        }
    }

    const input1 = document.getElementById('file-input-1');
    const input2 = document.getElementById('file-input-2');

    input1.addEventListener('change', function() {
        updatePlaceholder('file-input-1', 'file-label-1');
    });
    
    input2.addEventListener('change', function() {
        updatePlaceholder('file-input-2', 'file-label-2');
    });
    $(function() {
        var dd1 = new dropDown($('#myDropdown'));
        
        $(document).click(function() {
          $('.wrapper-dropdown').removeClass('active');
        });
      });
      
      function dropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
      }
      dropDown.prototype = {
        initEvents: function() {
          var obj = this;
          
          obj.dd.on('click', function() {
            $(this).toggleClass('active');
            return false;
          });
          
          obj.opts.on('click', function() {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
          });
        }
      }
});

