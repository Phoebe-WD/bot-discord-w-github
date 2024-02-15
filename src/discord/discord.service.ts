import { Injectable } from '@nestjs/common';

@Injectable()
export class DiscordService {
  private readonly discordWebhookUrl =
    'https://discord.com/api/webhooks/1207799000896372888/FWCIyypy8-oOXncERgZ3cmmvVzMI0mJac_Rt0-9N5aLh-GdD4tGXXlTVQEZURRRmFFNE';
  async notify(message: string) {
    const body = {
      content: message,
    };
    const resp = await fetch(this.discordWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!resp.ok) {
      console.log('Error sending message to discord');
      return false;
    }
    return true;
  }
}
