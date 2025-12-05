import { WbhooksListItem } from './webhooks-list-item'

export function WebhooksList() {
  return (
    <div className="flex-2 overflow-y-auto">
      <div className="space-y-1 p-2"></div>
      <div>
        <WbhooksListItem />
        <WbhooksListItem />
        <WbhooksListItem />
        <WbhooksListItem />
        <WbhooksListItem />
        <WbhooksListItem />
        <WbhooksListItem />
        <WbhooksListItem />
        <WbhooksListItem />
      </div>
    </div>
  )
}
