import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Experience {
  @Field()
  id: string;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  startDate: Date;

  @Field(() => Date, { nullable: true })
  endDate?: Date | null;

  @Field(() => [String])
  achievements: string[];
}