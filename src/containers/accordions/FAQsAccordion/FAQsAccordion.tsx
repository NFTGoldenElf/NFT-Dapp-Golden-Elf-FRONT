import { FC, useState, SyntheticEvent } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
    '.MuiAccordionSummary-root': {
        backgroundColor: '#222222',
    },
    fontSize: 'x-large'
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowDropDownIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
        color: '#fff'
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
        color: '#fff'
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    backgroundColor: '#222222',
    color: '#fff'
}));

const FAQsAccordion: FC = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (_event: SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <>
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
                slotProps={{ transition: { unmountOnExit: true } }}
            >
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                >
                    ¿Qué es GoldenElf?
                </AccordionSummary>
                <AccordionDetails>
                    Golden Elf es una colección de 9,999 NFT basados en las leyendas e historias de los mineros de la región de Remedios en Antioquía, Colombia.
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
                slotProps={{ transition: { unmountOnExit: true } }}
            >
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                >
                    ¿Precio y tamaño de la colección?
                </AccordionSummary>
                <AccordionDetails>
                    El tamaño de la colección consta de 9,999 NFT con una resolución de 1000x1000 píxeles, divididos en 8 rarezas con características únicas.
                </AccordionDetails>
            </Accordion>


            <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
                slotProps={{ transition: { unmountOnExit: true } }}
            >
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                >
                    ¿Objetivo general?
                </AccordionSummary>
                <AccordionDetails>
                    Nuestro objetivo es difundir esta historia legendaria mientras construimos una comunidad sólida. Queremos estar muy cerca de nuestra comunidad y, al hacerlo, construir una marca orientada a la comunidad.
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
                slotProps={{ transition: { unmountOnExit: true } }}
            >
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                >
                    ¿Blockchain?
                </AccordionSummary>
                <AccordionDetails>
                    Golden Elf estará en la blockchain ethereum.
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default FAQsAccordion