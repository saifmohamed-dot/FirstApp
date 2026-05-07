export class User {
    public Email : string = '';
    public Username : string = '';
    public Password : string = '';
}
export class Task {
    id : string;
    Title : string;
    Describtion : string;
    Priority : string;
    DueDate : string;
    Category : string;
    State : number ;
    constructor() {
      this.id = '';
      this.Title = "";
      this.Describtion = "";
      this.Priority = "";
      this.DueDate = "";
      this.Category = "";
      this.State = 0;
    }
}