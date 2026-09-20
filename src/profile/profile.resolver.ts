import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { Profile } from './entities/profile.entity';
import { Skill } from './entities/skill.entity';
import { Experience } from './entities/experience.entity';
import { Project } from './entities/project.entity';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => Profile, { nullable: true })
  profile() {
    return this.profileService.getProfile();
  }

  @ResolveField(() => [Skill])
  skills(@Parent() profile: { id: string }) {
    return this.profileService.getSkills(profile.id);
  }

  @ResolveField(() => [Experience])
  experience(@Parent() profile: { id: string }) {
    return this.profileService.getExperience(profile.id);
  }

  @ResolveField(() => [Project])
  projects(@Parent() profile: { id: string }) {
    return this.profileService.getProjects(profile.id);
  }
}