/** Created and implemented by Zhengqi at 07/02
    Tested and Fixed the bug by Zhengqi at 07/04
 */
  //Assign the last number enter by user to lastestNumber
  //@Update: lastestNumber
  function getLastNumber(){
    if(second != ""){
      lastestNumber = second;
    }else if(first != ""){
      lastestNumber = first;
    }else{
      lastestNumber = 0;
    }
  }

  //Clear the current memory value to null
  //@require: memory != null
  //@update: memory
  //@ensure: memory == 0
  function mc (){
    memory = "Nothing store in memory";
    updateMemory();
  }
  
  //Assign the current memory digit to the lastestNumber 
  //@require: memory is not null
  //@update: memory
  //@ensure: result = memory
  function mr (){
    result = memory;
    updateResult();
  }

  //Store the latest number to the memory
  //@requre: the number is not any operator
  function ms (num){
    if(result != null){
      memory = Number(result);
    }else if(second != ""){
      memory = Number(second);
    }else if(first != ""){
      memory = Number(first);
    }else{
      memory = 0;
    }
    //Case1: frist, second, opeartor are null --> memory = 0
    //Case2: only first != null --> memory = first
    //Case3: only opeartor != null --> same as Case1
    updateMemory()
  }

  //Using the current memory number to subtract the lastest input number
  //@Require the input is digit
  //@ensure: this.memory = *memory - lastestNumber
  function mSubtract(){
    if(document.getElementById("memory_area").innerHTML == "Nothing store in memory" && (memory == "Nothing store in memory")){
      ms();
    }
    if(second != ""){
      memory -= Number(second);
    }else if(first != ""){
      memory -= Number(first);
    }else{
      memory -= Number(memory);
    }
    updateMemory();
  }

  //Using the current memory number to subtract the lastest input number
  //@Require the input is digit
  //@update: memory
  //@ensure: this.memory = *memory - lastestNumber
  function mPlus(){
    if(document.getElementById("memory_area").innerHTML == "Nothing store in memory" && (memory == "Nothing store in memory")){
      ms();
    }
      if(second != ""){
        memory += Number(second);
      }else if(first != ""){
        memory += Number(first);
      }else{
        memory +=  Number(memory);
      }
    // }
    updateMemory();
  }

  //Create listeners for memory buttons
  // listeners for memory operation: mc, mr, m+, m-, ms
  Array.prototype.forEach.call(memoryKeys, function(element, index) {
    element.addEventListener("click", function(){
      var ch = element.innerHTML; //get memory opeartion: one of mc, mr, m+, m-, ms
      switch (ch) {
        case "MC":
          mc();
          break;
        case 'MR':
          mr();
          break;
        case 'M+':
          mPlus();
          break;
        case 'M-':
          mSubtract();
          break;
        case 'MS':
          ms();
          break;
        default:
          operand = holdValue;
      }

    });
  });
