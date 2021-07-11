export class CreateTaskDto {
  constructor(
    public title: string,
    public order: number,
    public description: string,
    public userId: string | null,
    public boardId: string,
    public columnId: string | null,
  ) {}
}
