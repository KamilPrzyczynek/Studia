import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import type { SvgIconComponent } from '@mui/icons-material';

interface StatsCardProps {
    title: string;
    value: number;
    icon: SvgIconComponent;
    color: string;
    bgColor: string;
}

export default function StatsCard({
                                      title,
                                      value,
                                      icon: Icon,
                                      color,
                                      bgColor,
                                  }: StatsCardProps) {
    return (
        <Card
            elevation={0}
            sx={{
                borderRadius: '16px',
                border: '1px solid #DADADA',
                bgcolor: '#F7F7F7',
                boxShadow: 'none',
            }}
        >
            <CardContent sx={{ p: 3 }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: 2,
                    }}
                >
                    <Box>
                        <Typography
                            component="p"
                            sx={{
                                fontSize: 14,
                                color: '#666666',
                                mb: 1,
                            }}
                        >
                            {title}
                        </Typography>

                        <Typography
                            component="p"
                            sx={{
                                fontSize: 32,
                                fontWeight: 700,
                                lineHeight: 1.2,
                                color: '#333333',
                            }}
                        >
                            {value}
                        </Typography>
                    </Box>

                    <Avatar
                        sx={{
                            width: 48,
                            height: 48,
                            bgcolor: bgColor,
                            color,
                            border: '1px solid #DADADA',
                        }}
                    >
                        <Icon />
                    </Avatar>
                </Box>
            </CardContent>
        </Card>
    );
}