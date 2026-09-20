import { Module } from '@nestjs/common';
import { ProfileResolver } from './profile.resolver';
import { ProfileService } from './profile.service';
import { ProfileRepository } from './repositories/profile.repository';

@Module({
  providers: [ProfileResolver, ProfileService, ProfileRepository],
})
export class ProfileModule {}