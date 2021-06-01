import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse): void => {
  const clients = [
    {
      id: 1,
      name: 'Fitness Hut',
      URL: 'https://www.fitnesshut.pt/',
      logoSVG:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 157.9 42.5"><path d="M21.2 0a21.2 21.2 0 1021.3 21.2A21.3 21.3 0 0021.2 0zm0 41.7a20 20 0 01-4-.4l.2-.5 3.8-10 3.8 9.8.2.5.1.2a20.9 20.9 0 01-4 .4zm13-4.7l-.1-.5L21.2 3.1l-13 33.7v.2A20.5 20.5 0 1137 34.2a20 20 0 01-2.8 2.8zm13-23a2.6 2.6 0 00-2.4 2.5V26a2.5 2.5 0 002.3 2.5h108.6a2.5 2.5 0 002.2-2.5V14zm9.4 6.4a1 1 0 01.8.3 1 1 0 010 1.4 1 1 0 01-.8.3h-7v2a1 1 0 01-.3.8 1 1 0 01-1.4 0 1 1 0 01-.3-.7V18a.9.9 0 01.8-1 .7.7 0 01.2 0h8a1 1 0 01.8.3 1 1 0 010 1.4 1 1 0 01-.7.3h-7v1.4zm4 4.2a1 1 0 01-.3.7 1 1 0 01-.7.3 1 1 0 01-.7-.3 1 1 0 01-.3-.7V18a1 1 0 01.3-.7 1 1 0 01.7-.3 1 1 0 01.7.3 1 1 0 01.3.7zm10.8-5.9a1 1 0 01-.8.3h-3v5.6a1 1 0 01-.3.7 1.1 1.1 0 01-.7.3 1 1 0 01-.7-.3 1 1 0 01-.3-.7V19h-3a1 1 0 01-.7-.2 1 1 0 010-1.5 1 1 0 01.7-.3h8a1 1 0 01.8.3 1 1 0 010 1.4zm11.3 5.6a1.2 1.2 0 01-.4 1 1.1 1.1 0 01-.7.3 1.4 1.4 0 01-.4-.1 1 1 0 01-.4-.2L74.6 20v4.6a1 1 0 01-.3.7 1 1 0 01-.7.3 1 1 0 01-.7-.3 1 1 0 01-.3-.7V18a1.1 1.1 0 01.2-.8.8.8 0 01.6-.2 1.2 1.2 0 01.5 0 1.7 1.7 0 01.6.4l6.1 5.3V18a1 1 0 01.3-.7 1 1 0 01.7-.3 1 1 0 01.8.3 1 1 0 01.2.7zm11.2.9a1 1 0 01-.7.3h-8a.9.9 0 01-1-.8 1 1 0 010-.2V18a.9.9 0 01.7-1 .7.7 0 01.2 0h8a1 1 0 01.8.3 1 1 0 010 1.4 1 1 0 01-.8.3h-7v1.2H93a1 1 0 01.7.3 1 1 0 010 1.5 1 1 0 01-.7.3h-6.9v1.2h7a1 1 0 01.8.3 1 1 0 010 1.4zm10.7-5a.9.9 0 011 .8 1 1 0 010 .3v3.2a.9.9 0 01-.8 1 1 1 0 01-.2 0h-8a.9.9 0 01-.8-.3 1.1 1.1 0 010-1.4.9.9 0 01.7-.4h7v-1.1h-7a.9.9 0 01-1-.8 1 1 0 010-.3V18a.9.9 0 01.8-1h8.3a1 1 0 01.7.3 1 1 0 010 1.4 1 1 0 01-.7.3h-7v1.2zm11.5 0a.9.9 0 011 .8 1 1 0 010 .3v3.2a1 1 0 01-.8 1 1 1 0 01-.2 0H108a1 1 0 01-.7-.3 1.1 1.1 0 010-1.4 1 1 0 01.7-.4h7v-1.1h-7a.9.9 0 01-1-.8 1 1 0 010-.3V18a.9.9 0 01.8-1h8.3a1 1 0 01.7.3 1 1 0 010 1.4 1 1 0 01-.7.3h-7v1.2zm39.6 7.6h-36V14.7h37.6V26a1.9 1.9 0 01-1.6 1.9zM131.9 17a1 1 0 00-.7.3 1 1 0 00-.3.7v2.3h-6V18a1 1 0 00-.3-.7 1 1 0 00-.7-.3 1 1 0 00-.7.3 1 1 0 00-.3.7v6.6a.9.9 0 00.3.8 1 1 0 00.7.2 1 1 0 00.7-.2 1 1 0 00.3-.8v-2.3h6v2.3a1 1 0 00.3.8 1 1 0 00.7.2 1 1 0 00.8-.2.9.9 0 00.3-.8V18a1 1 0 00-.3-.7 1 1 0 00-.7-.3zm22.6 0h-8a1 1 0 00-.8.4 1 1 0 000 1.4 1 1 0 00.8.3h3v5.5a1 1 0 00.3.8 1 1 0 001.4 0 1 1 0 00.3-.8v-5.5h3a1 1 0 00.7-.3 1 1 0 000-1.5 1 1 0 00-.7-.3zm-11 0a1 1 0 00-.7.3 1 1 0 00-.3.7v5.5h-6V18a1 1 0 00-.3-.7 1 1 0 00-.8-.3 1 1 0 00-.7.3 1 1 0 00-.3.7v6.5a.9.9 0 00.8 1 1 1 0 00.2 0h8.1a.9.9 0 001-.7 1 1 0 000-.3V18a1 1 0 00-.3-.7 1 1 0 00-.7-.3z" /></svg>'
    },
    {
      id: 2,
      name: 'This Is Love Studio',
      URL: 'https://www.thisislove.pt/',
      logoSVG:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.55 13.36"><path d="M3.81.87H1.34v2.67H0v1.79h1.34v5.89a1.85 1.85 0 00.42 1.33 3.18 3.18 0 002.42.62l1.19-.05v-1.87h-.49a1.62 1.62 0 01-.88-.13c-.1-.09-.15-.34-.15-.73V5.33h1.52V3.54H3.81zm12.66 3.58a2.78 2.78 0 00-1.18-.94 4 4 0 00-1.61-.31 3.5 3.5 0 00-1.5.33 3.13 3.13 0 00-1.26 1.16V.12h-2.5V13h2.5V7.84A3 3 0 0111.43 6a1.76 1.76 0 011.5-.67 1.31 1.31 0 011.29.67 2.52 2.52 0 01.26 1.25V13H17V7.4a13.34 13.34 0 000-1.85 2.54 2.54 0 00-.53-1.1zm4.38-2.14h2.54V0h-2.54zm0 10.72h2.54V3.45h-2.54zm11.57-5.76a15.27 15.27 0 01-2.61-.7.63.63 0 01-.37-.57.72.72 0 01.35-.6A2 2 0 0131 5.1a1.7 1.7 0 011.41.51 1.46 1.46 0 01.28.76h2.5a3 3 0 00-1.3-2.47 5.37 5.37 0 00-2.93-.72 4.15 4.15 0 00-2.93 1 3 3 0 00-1.05 2.28 2.21 2.21 0 00.67 1.72 5.52 5.52 0 002.3 1 14 14 0 012.62.76.7.7 0 01.36.64.72.72 0 01-.44.66 2.76 2.76 0 01-1.18.22 2.31 2.31 0 01-1.73-.51 1.65 1.65 0 01-.35-.94h-2.59a3.11 3.11 0 001.08 2.43 5 5 0 003.34.95 5 5 0 003.28-.9 2.92 2.92 0 001.07-2.33 2.42 2.42 0 00-.74-1.8 4.82 4.82 0 00-2.25-1.09zM38.71 13h2.54V3.45h-2.54zm0-10.72h2.54V0h-2.54zm11.57 5a15.53 15.53 0 01-2.62-.7.65.65 0 01-.37-.58.74.74 0 01.35-.6 2 2 0 011.17-.25 1.73 1.73 0 011.41.51 1.38 1.38 0 01.27.76H53a3.07 3.07 0 00-1.3-2.52 5.39 5.39 0 00-2.93-.72 4.2 4.2 0 00-2.94 1 3 3 0 00-1 2.28 2.17 2.17 0 00.67 1.72 5.46 5.46 0 002.3 1 14.33 14.33 0 012.62.76.74.74 0 01-.09 1.3 2.73 2.73 0 01-1.18.22 2.32 2.32 0 01-1.73-.51A1.66 1.66 0 0147 10h-2.5a3.11 3.11 0 001.08 2.43 5 5 0 003.34.95 5 5 0 003.28-.9 2.91 2.91 0 001.06-2.33 2.38 2.38 0 00-.74-1.8 4.73 4.73 0 00-2.24-1.08zm6.3 5.72h2.51V.08h-2.51zm10.68-9.85a4.39 4.39 0 00-3.68 1.52 5.57 5.57 0 00-1.22 3.59 5.54 5.54 0 001.22 3.6 4.43 4.43 0 003.68 1.5 4.45 4.45 0 003.68-1.5 5.54 5.54 0 001.21-3.6 5.57 5.57 0 00-1.21-3.59 4.4 4.4 0 00-3.68-1.52zm1.68 7.33a2.22 2.22 0 01-3.38 0A3.58 3.58 0 0165 8.26 3.58 3.58 0 0165.56 6a2.22 2.22 0 013.38 0 3.64 3.64 0 01.59 2.22 3.64 3.64 0 01-.59 2.26zm10.29 0l-2-7.07h-2.81L77.86 13h2.64L84 3.45h-2.73zm16.23-3.43a4.56 4.56 0 00-.76-2 3.91 3.91 0 00-1.7-1.4 5.41 5.41 0 00-2.25-.45 4.6 4.6 0 00-3.42 1.33 5.17 5.17 0 00-1.32 3.81 4.63 4.63 0 001.46 3.84 5.19 5.19 0 003.37 1.18A4.67 4.67 0 0094.49 12a3.13 3.13 0 00.93-1.73h-2.56a2.09 2.09 0 01-.52.66 2.12 2.12 0 01-1.39.44 2.53 2.53 0 01-1.38-.37 2.3 2.3 0 01-1-2h7a12 12 0 00-.11-1.95zm-6.83.24a2.58 2.58 0 01.67-1.48 2 2 0 011.49-.55 2.23 2.23 0 011.49.52A2.1 2.1 0 0193 7.29z"/></svg>'
    },
    {
      id: 3,
      name: 'Holmes Place',
      URL: 'https://www.holmesplace.com/pt/pt',
      logoSVG:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.25 44.09"><path d="M64.33 13.66a13.71 13.71 0 10-13.71 13.77 13.71 13.71 0 0013.71-13.77zm-26.44 0c0-.58.1-1.17.1-1.71a12.69 12.69 0 0114.3-10.86l-5.11 12.24h-3.34a3.66 3.66 0 00-3.59 3.73 3.12 3.12 0 003 3.24c2.35 0 3.24-2.11 3.58-2.85L48.26 14h4.22l-5 12a12.63 12.63 0 01-9.59-12.34zm9 .3l-1.32 3c-.64 1.38-1.28 2.27-2.7 2.27a2.36 2.36 0 01-2.17-2.46A2.76 2.76 0 0143.45 14h3.48zm1.96 12.24l5-12.24h3.45a3.68 3.68 0 003.59-3.74 3.13 3.13 0 00-3-3.24c-2.36 0-3.25 2.11-3.59 2.85-.15.3-.69 1.67-1.42 3.49h-4.23l5-12a12.61 12.61 0 019.63 12.29c0 .54-.1 1.18-.15 1.72A12.71 12.71 0 0148.85 26.2zm5.35-12.88l1.28-3c.64-1.37 1.28-2.26 2.7-2.26a2.35 2.35 0 012.16 2.46 2.71 2.71 0 01-2.61 2.8H54.2zm-39.8 20.5a5.11 5.11 0 00-5.16 5.07V39a5 5 0 005 5.11h.2A5 5 0 0018 42.66 5.1 5.1 0 0019.56 39 5.21 5.21 0 0018 35.29a5 5 0 00-3.6-1.47zm0 9.38a4.28 4.28 0 010-8.55 4.28 4.28 0 010 8.55zm14.5-9.53v10.27h.88V36l3.83 4.86L37.5 36v7.91h.88V33.67l-4.72 5.9zm-6.49.24h-.94v10h5.6v-.83H22.4zm-16 4.68l-5.5-.05v-4.63H0v10h.93v-4.49h5.5v4.52h.94V34h-.94zM89 43.2a4.28 4.28 0 010-8.55 3.9 3.9 0 013.2 1.48l.69-.54A4.73 4.73 0 0089 33.77a5 5 0 00-5.06 4.88v.23a5.17 5.17 0 009.19 3.2l-.79-.44A4 4 0 0189 43.2zm-9.79-9.58l-4.16 10.17v.1h.93l1-2.45h4.57l1 2.45h1l-4.28-10.12zm-2 7l1.92-4.82 2 4.82zm-35.29-1.3h4.53v-.83h-4.53v-3.74H47v-.84h-6v10h6.19v-.81h-5.27zm54 3.79v-3.79h4.53v-.83h-4.52v-3.74h5.12v-.84H95v10h6.25v-.81zm-43.43-4.67l-.79-.35c-1.23-.59-1.77-.93-1.77-1.91a1.58 1.58 0 011.64-1.53h.08a2.2 2.2 0 012 1h.05l.74-.44a2.89 2.89 0 00-2.7-1.37 2.39 2.39 0 00-2.6 2.18 1.09 1.09 0 000 .18c0 1.37.84 2.06 2.31 2.75l.79.39c1.27.59 1.91 1.08 1.91 2.16s-.83 1.72-2.21 1.72a2.93 2.93 0 01-2.6-1.52l-.79.39h.05A3.72 3.72 0 0051.85 44c1.92 0 3.1-1 3.1-2.6s-.89-2.27-2.46-3zm10.66-4.52H60.2v10h.94v-4h2c2.06 0 3.34-1.13 3.34-3s-1.27-3-3.34-3zm0 5.16h-2v-4.33h2c1.53 0 2.41.79 2.41 2.16s-.88 2.17-2.41 2.17zm6.19-5.16h-.93v10H74v-.83h-4.65z"/></svg>'
    },
    {
      id: 4,
      name: 'TERR Esteves',
      URL: '',
      logoSVG:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.48 46.27"><path d="M61.91,35.18h1.82v-.65H61.91v-.8h2v-.66H61.15v3.75H64v-.68H61.91Zm10.68-.5-.66-.15a2.24,2.24,0,0,1-.5-.16.3.3,0,0,1-.18-.3.36.36,0,0,1,.18-.34.88.88,0,0,1,.5-.12,1.09,1.09,0,0,1,.47.09.55.55,0,0,1,.3.49h.75a1.14,1.14,0,0,0-.44-.92A1.71,1.71,0,0,0,72,33a1.55,1.55,0,0,0-1.08.33,1.09,1.09,0,0,0-.38.84.91.91,0,0,0,.38.81,2.73,2.73,0,0,0,.83.29l.4.09a1.87,1.87,0,0,1,.52.17.32.32,0,0,1,.17.29.45.45,0,0,1-.34.44,1.76,1.76,0,0,1-.46.06.88.88,0,0,1-.67-.23.8.8,0,0,1-.14-.39h-.75a1.13,1.13,0,0,0,.43.92,1.86,1.86,0,0,0,1.16.34,1.76,1.76,0,0,0,1.13-.34,1.13,1.13,0,0,0,.4-.86.92.92,0,0,0-.34-.76,1.61,1.61,0,0,0-.65-.27Zm7.26-1H81v3.09h.79V33.74h1.12v-.67h-3Zm10.33,1.45H92v-.65H90.18v-.8h2v-.67H89.42v3.75h2.84v-.67H90.18Zm10.1.73-.81-2.84h-.84l1.27,3.75h.74l1.28-3.75h-.82Zm8.94-.73H111v-.65h-1.82v-.8h2v-.67h-2.75v3.75h2.85v-.67h-2.08Zm10.67-.5-.66-.16a2.21,2.21,0,0,1-.5-.15.34.34,0,0,1-.18-.3.4.4,0,0,1,.18-.34.9.9,0,0,1,.5-.12,1,1,0,0,1,.47.09.55.55,0,0,1,.3.48h.75a1.08,1.08,0,0,0-.44-.91,1.9,1.9,0,0,0-2.11,0,1,1,0,0,0-.37.84.9.9,0,0,0,.37.81,2.47,2.47,0,0,0,.83.28l.4.09a1.61,1.61,0,0,1,.52.18.32.32,0,0,1,.17.29.45.45,0,0,1-.34.43,1.19,1.19,0,0,1-.46.06.81.81,0,0,1-.66-.23.67.67,0,0,1-.15-.38h-.75a1.14,1.14,0,0,0,.43.92,1.85,1.85,0,0,0,1.16.33,1.65,1.65,0,0,0,1.13-.34,1.11,1.11,0,0,0,.4-.85.94.94,0,0,0-.34-.77,1.62,1.62,0,0,0-.65-.26Zm1.33-20.53a3.34,3.34,0,0,0-.7-1,3.42,3.42,0,0,0-1-.71,3.36,3.36,0,0,0-1.33-.27h-17v0c-.13,0-.27,0-.41,0H89.12l-.29,0H75.34l-.35,0H54.4a2.24,2.24,0,1,0-.09,4.48h4.57a2.23,2.23,0,0,1,2.23,2.24h0v9.7a2.24,2.24,0,0,0,2.23,2.25h.14a2.24,2.24,0,0,0,2.24-2.24h0v-9.7A2.24,2.24,0,0,1,68,16.62h4.13v10.9a3.1,3.1,0,0,0,.26,1.24,3.29,3.29,0,0,0,.72,1,3.65,3.65,0,0,0,1.1.71,3.33,3.33,0,0,0,1.36.26H88a2.24,2.24,0,1,0,0-4.47H77.9a1.2,1.2,0,0,1-1.2-1.2V17.8a1.2,1.2,0,0,1,1.2-1.2H87v0H97.93l.25,0,.13,0a1.36,1.36,0,0,1,.25,2.7,1.07,1.07,0,0,1-.25,0H92.05a2.29,2.29,0,0,0-2.32,2,2.23,2.23,0,0,0,2,2.44h1.17a1,1,0,0,1,.69.33l4.77,6.31a.88.88,0,0,0,.69.33h3.31a.88.88,0,0,0,.88-.88.91.91,0,0,0-.18-.55l-4-5.53h1.81a3.1,3.1,0,0,0,1.24-.26,3.15,3.15,0,0,0,1-.69,3.22,3.22,0,0,0,.7-1.05,3.28,3.28,0,0,0,.27-1.34V16.62h11.21l.24,0h.14a1.36,1.36,0,0,1,.24,2.7,1,1,0,0,1-.24,0h-6.26a2.29,2.29,0,0,0-2.32,2,2.22,2.22,0,0,0,2,2.44h1.18a.88.88,0,0,1,.69.33l4.77,6.31a.88.88,0,0,0,.69.33h3.3a.89.89,0,0,0,.89-.88.86.86,0,0,0-.19-.55l-4-5.54h1.81a3.16,3.16,0,0,0,1.24-.25,3.43,3.43,0,0,0,1-.69,3.51,3.51,0,0,0,.7-1.05,3.45,3.45,0,0,0,.27-1.34V15.39a3.17,3.17,0,0,0-.26-1.24Zm-41.74,7.3a2.1,2.1,0,1,0,2.1-2.1A2.1,2.1,0,0,0,79.48,21.45ZM15.94,18.66l5.31,9.2,5.46-9.46L37.49,37.07H15.94l-5.31-9.2L0,46.27H53.42L26.71,0Z" /></svg>'
    }
  ];

  return response.json(clients);
};

// http://localhost:3000/api/clients