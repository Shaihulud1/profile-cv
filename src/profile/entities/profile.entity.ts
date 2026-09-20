import { Field, ObjectType } from '@nestjs/graphql';
import { Skill } from './skill.entity';
import { Experience } from './experience.entity';
import { Project } from './project.entity';

@ObjectType()
export class Profile {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  linkedin: string;

  @Field(() => [Skill])
  skills: Skill[];

  @Field(() => [Experience])
  experience: Experience[];

  @Field(() => [Project])
  projects: Project[];
}