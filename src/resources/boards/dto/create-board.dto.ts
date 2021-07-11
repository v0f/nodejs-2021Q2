export class CreateBoardDto {
  constructor(public title: string, public columns: string | null) {}
}
