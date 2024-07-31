export class Filter {
    search?: string;
    statuses: Status[] = [Status.ALL];
}

export enum Status {
    ALL = 'all',
    PENDING = 'pending',
    FAILED = 'failed',
}