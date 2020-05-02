export interface CommandFailed {
    message: string;
}

export interface CommandHandled {
}

export interface CompletionItem {
    displayText: string;
    kind: string;
    filterText: string;
    sortText: string;
    insertText: string;
    documentation: string;
}

export interface CompletionRequestCompleted {
    completionList: Array<CompletionItem>;
}

export interface DisplayEventBase {
    value: any;
    formattedValues: Array<any>;
    valueId: string;
}

export interface LinePosition {
    line: number;
    character: number;
}

export interface LinePositionSpan {
    start: LinePosition;
    end: LinePosition;
}

export interface HoverMarkdownProduced {
    content: string;
    range?: LinePositionSpan
}

export interface HoverPlainTextProduced {
    content: string;
    range?: LinePositionSpan;
}

export interface ReturnValueProduced extends DisplayEventBase {
}

export interface StandardOutputValueProduced extends DisplayEventBase {
}

export type Event = CommandFailed | CommandHandled | CompletionRequestCompleted | HoverMarkdownProduced | HoverPlainTextProduced | ReturnValueProduced | StandardOutputValueProduced;

export interface EventEnvelope {
    eventType: string;
    event: Event;
    cause: {token: string};
}
