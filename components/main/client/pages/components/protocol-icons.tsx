import { Card, CardContent } from '@/components/ui/card';
import { ContractSchema } from '@/lib/schema/contract';
import { ProtocolSchema } from '@/lib/schema/protocol';
import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useEffect, useRef, useState } from 'react';
import { IconLink } from '../../shared/icon-link';
import { cn } from '@/lib/utils';

interface ProtocolIconsProps extends React.HTMLAttributes<HTMLDivElement> {
    item: ProtocolSchema,
}

export function ProtocolIcons({
    className,
    item
}: ProtocolIconsProps) {
    return <div className={cn("flex items-center justify-center space-x-2", className)}>
        {item.github &&
            <IconLink href={item.github} icon="mingcute:github-line" />}

        {item.website &&
            <IconLink href={item.website} icon="gg:website" />}

        {item.documentation &&
            <IconLink href={item.documentation} icon="icon-park-outline:doc-search-two" />}

        {item.audit &&
            <IconLink href={item.audit} icon="iconamoon:shield-yes" />}

        {item.blog &&
            <IconLink href={item.blog} icon="iconamoon:news" />}

        {item.discord &&
            <IconLink href={item.discord} icon="mingcute:discord-line" />}

        {item.x &&
            <IconLink href={item.x} icon="simple-icons:x" />}
    </div>
};

