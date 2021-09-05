export const envConf = <T>(map: { production?: T; development?: T }): T =>
  map[process.env.NODE_ENV];
