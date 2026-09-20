import { Injectable } from '@nestjs/common';
import { ProfileRepository } from './repositories/profile.repository';

@Injectable()
export class ProfileService {
  constructor(private readonly profileRepository: ProfileRepository) {}

  getProfile() {
    return this.profileRepository.findProfile();
  }

  getSkills(profileId: string) {
    return this.profileRepository.findSkills(profileId);
  }

  getExperience(profileId: string) {
    return this.profileRepository.findWorkExperience(profileId);
  }

  getProjects(profileId: string) {
    return this.profileRepository.findProjects(profileId);
  }
}