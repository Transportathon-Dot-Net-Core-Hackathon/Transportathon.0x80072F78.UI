import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Services } from 'src/app/core/services';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.scss']
})
export class CommentModalComponent implements OnInit {

  commentForms: FormGroup

  @Input() commentDialog: boolean = true;

  comments: any[];

  licence: any = [
    {value:0,label:"B"},
    {value:1,label:"C"},
    {value:2,label:"CE"},
  ]

  constructor(private services: Services,
    private fb: FormBuilder,) {

  }

  ngOnInit(): void {
    this.commentForms

    this.commentForms = this.fb.group({
      id: [],
      OfferId: [],
      CompanyId: [],
      Score: [],
      Date: [],
      Text: [],
      UserId: [],
    })
  }





  hideDialog() {
    this.commentDialog = false;
  }

  saveComment() {



  }
}
