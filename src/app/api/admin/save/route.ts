import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { getSession } from '@/lib/session';

export async function POST(req: Request) {
    try {
        const session = await getSession();
        if (!session.isLoggedIn) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();
        const { type, data } = body;

        if (!['blog', 'projects', 'team', 'faq', 'partners', 'carousel_settings'].includes(type)) {
            return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
        }

        if (type !== 'carousel_settings' && !Array.isArray(data)) {
            return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
        }

        let fileName = '';
        let exportName = '';
        let interfaceName = '';

        switch (type) {
            case 'blog':
                fileName = 'blogData.ts';
                exportName = 'BLOG_POSTS';
                interfaceName = 'BlogPost';
                break;
            case 'projects':
                fileName = 'projectData.ts';
                exportName = 'PROJECT_DATA';
                interfaceName = 'Project';
                break;
            case 'team':
                fileName = 'teamData.ts';
                exportName = 'TEAM_DATA';
                interfaceName = 'TeamMember';
                break;
            case 'faq':
                fileName = 'faqData.ts';
                exportName = 'FAQ_DATA';
                interfaceName = 'FAQItem';
                break;
            case 'partners':
                fileName = 'partnerData.ts';
                exportName = 'PARTNER_DATA';
                interfaceName = 'Partner';
                break;
            case 'carousel_settings':
                fileName = 'carouselSettings.ts';
                exportName = 'CAROUSEL_SETTINGS';
                interfaceName = 'CarouselSettings';
                break;
        }

        const filePath = path.join(process.cwd(), 'src', 'lib', fileName);

        let fileContent = '';
        if (fs.existsSync(filePath)) {
            fileContent = fs.readFileSync(filePath, 'utf-8');
        } else {
            return NextResponse.json({ error: 'File not found' }, { status: 404 });
        }

        // More robust replacement: Split the file at the array export and replace everything after it
        const splitString = `export const ${exportName}`;
        const parts = fileContent.split(splitString);

        if (parts.length < 2) {
            return NextResponse.json({ error: 'Could not parse file structure' }, { status: 500 });
        }

        const newDataString = JSON.stringify(data, null, 4);

        let updatedContent = "";

        if (type === 'carousel_settings') {
            updatedContent = parts[0] + `export const ${exportName}: ${interfaceName} = ${newDataString};\n`;
        } else {
            updatedContent = parts[0] + `export const ${exportName}: ${interfaceName}[] = ${newDataString};\n`;
        }

        // Write back to the file
        fs.writeFileSync(filePath, updatedContent, 'utf-8');

        return NextResponse.json({ success: true, message: `Updated ${fileName}` });
    } catch (error) {
        console.error('Error saving data:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
