import * as zod from 'zod';
import type { VersionStabilities } from '$lib/generated';

export type SMLArchData = {
  id: string;
  SMLVersionArchID: string;
  platform: string;
  link: string;
};

export type SMLVersionData = {
  version: string;
  satisfactory_version: number;
  bootstrap_version?: string;
  stability: VersionStabilities;
  link: string;
  arch: SMLArchData[];
  changelog: string;
  date: string;
};

const versionRegex =
  /^(<=|<|>|>=|\^)?(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

export const smlLinksSchema = zod.object({
  id: zod.string(),
  SMLVersionArchID: zod.string(),
  platform: zod.string(),
  link: zod.string().url()
});

export const smlVersionSchema = zod.object({
  version: zod.string().regex(versionRegex),
  satisfactory_version: zod.number(),
  bootstrap_version: zod.string().regex(versionRegex),
  stability: zod.string(),
  link: zod.string().url(),
  arch: zod.array(smlLinksSchema),
  changelog: zod.string(),
  date: zod.string()
});
