import { Module } from '@nestjs/common';
import { GithubModule } from './github/github.module';
import { DiscordService } from './discord/discord.service';

@Module({
  imports: [GithubModule],
  providers: [DiscordService],
})
export class AppModule {}
