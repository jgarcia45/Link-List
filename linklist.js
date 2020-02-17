//Linked List
//October 11, 2019

/*
Implement a simgly, and doubly Linked List in Java Script
Methods:
1. Add
2. Remove 
3. Search For
4. Sort
5. Add First
6. Add Last
7. Remove First
8. Remove Last
*/

//"use strict";

//Search For return true or false, Remove value from list, sort the values in the list(EX)
var LinkedList = function() {
    this.Head = null;
    this.Last = null;
    
    //AddtoLast
    this.addLast = function(myNum) {
      if(this.Head == null) {
          this.Head = new Node(myNum); 
          this.Last = this.Head;
      }else {
        this.Last.Next = new Node(myNum);
        this.Last = this.Last.Next;
      }
    };
    
    //AddtoFirst
    this.addFirst = function(myNum) {
        if(this.Head == null) {
            this.addLast(myNum);
        }else {
            let tmp = this.Head;
            this.Head = new Node(myNum);
            this.Head.Next = tmp;
        }  
    };
    
    //Remove First
    this.removeFirst = function() {
        if(this.Head === this.Last) {
            this.Head = null;
            this.Last = null;
        }else{
            this.Head = this.Head.Next;
        }
    };
    
    //Remove Last
    this.removeLast = function(myNum) {
        if(this.Head === this.Last) {
            this.Head = null;
            this.Last = null;
        }else {
            this.Head.Next = this.Last;
        }
    };
    
    //Search For
    this.searchFor = function(myNum) {
        
        let tmp = this.Head;
        
        if(tmp === null) {
            console.log("LinkedList Empty");
        }
        
        while(tmp != null) {
            if(tmp.Num === myNum) {
                console.log("Node Found");
                return true;
            }
            tmp = tmp.Next;
        }
        
        console.log("Node Not Found!");
        //return false;
    };
    
    //Remove From List
    this.removeNum = function(myNum) {
        if(this.searchFor(myNum) === true) {
            if(this.myNum === this.Head.Num) {
                this.Head = this.Head.Next;
            }
        }
        else{
            console.log("Node is not in Linked List!");
        }
        }
    };
    
    //Sort the Values
    this.sortNum = function(myNum) {
    }
    
};

var Node = function(num) {
    this.Num = num;
    this.Next = null;
};
