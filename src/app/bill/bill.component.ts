import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  constructor(private fb: FormBuilder, private router:Router)
  {
    
  }
  payForm!: FormGroup
  ngOnInit():void{
    this.payForm = this.fb.group({
      name:['',Validators.required],
      amt:['',Validators.required]
    })}
    onsubmit()
    {

    }
}
