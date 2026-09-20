import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import type {
  Profile as PrismaProfile,
  Skill as PrismaSkill,
  Experience as PrismaWorkExperience,
  Project as PrismaProject,
} from '@prisma/client';

@Injectable()
export class ProfileRepository {
  constructor(private readonly prisma: PrismaService) {}

  findProfile(): Promise<PrismaProfile | null> {
    return this.prisma.profile.findFirst();
  }

  findSkills(profileId: string): Promise<PrismaSkill[]> {
    return this.prisma.skill.findMany({ where: { profileId } });
  }

  findWorkExperience(profileId: string): Promise<PrismaWorkExperience[]> {
    return this.prisma.experience.findMany({ where: { profileId } });
  }

  findProjects(profileId: string): Promise<PrismaProject[]> {
    return this.prisma.project.findMany({ where: { profileId } });
  }
}