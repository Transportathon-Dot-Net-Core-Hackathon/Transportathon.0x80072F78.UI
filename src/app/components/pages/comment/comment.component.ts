import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CommentDTO, Services } from 'src/app/core/services';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  commentDialog: boolean;

  comments: any[];

  comment: CommentDTO;

  selectedComments: any[];

  submitted: boolean;

  statuses: any[];

  constructor(private services: Services,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private httpClient: HttpClient
  ) { }
  cols: any[] = [];

  ngOnInit() {
    const url = 'https://localhost:44304/api/Transportathon/Comment/GetAll';

    this.httpClient.get(url).subscribe(
      {
        next: (response: any) => {
          this.comments = response.data
        },
        error: (error) => {
          debugger
          console.error('Failed to retrieve data', error);
        },
        complete: () => {
        }
      }
    );


    this.cols = [
      { field: 'id', header: 'id', hide: true },
      { field: 'offerId', header: 'offerId' },
      { field: 'companyId', header: 'companyId' },
      { field: 'score', header: 'score' },
      { field: 'date', header: 'date' },
      { field: 'text', header: 'text' },
      { field: 'userId', header: 'userId' },
    ];
  }

  openNew() {
    this.comment = new CommentDTO
    this.submitted = false;
    this.commentDialog = true;
  }

  deleteSelectedComments() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected comments?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.comments = this.comments.filter(val => !this.selectedComments.includes(val));
        this.selectedComments = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Comments Deleted', life: 3000 });
      }
    });
  }

  editComment(comment: any) {
    this.comment = { ...comment };
    this.commentDialog = true;
  }

  deleteComment(comment: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + comment.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.comments = this.comments.filter(val => val.id !== comment.id);
        this.comment = new CommentDTO;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'any Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.commentDialog = false;
    this.submitted = false;
  }

  saveComment() {
    this.submitted = true;


  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.comments.length; i++) {
      if (this.comments[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}




