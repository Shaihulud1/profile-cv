import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { profileFixture } from './fixtures/profile.fixture';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
  constructor(private readonly prisma: PrismaService) {}

  async onApplicationBootstrap() {
    await this.prisma.profile.create({
      data: {
        name: profileFixture.name,
        description: profileFixture.description,
        linkedin: profileFixture.linkedin,
        skills: {
          create: profileFixture.skills,
        },
        experience: {
          create: profileFixture.experience,
        },
        projects: {
          create: profileFixture.projects,
        },
      },
    });

  }
}