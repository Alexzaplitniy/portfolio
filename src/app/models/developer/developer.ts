import { DeveloperInterface } from './developer.interface';

export class Developer implements DeveloperInterface{
  constructor(
    public name,
    public photo,
    public position,
    public tags,
  ){}
}
