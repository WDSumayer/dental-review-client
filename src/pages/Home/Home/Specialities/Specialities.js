import React from 'react';

const Quality = () => {
    return (
        <div className='container py-5'>
            <h2 className='mb-4'>Specialities</h2>
            <div className='row'>
                <div className='col-12 col-md-4'>
                    <div className='p-3 text-center border'>
                        <h3>Endodontist</h3>
                        <p>An endodontist is a highly trained dental specialist. Endodontists focus on caring for complex tooth problems that primarily affect the tooth pulp the inside of teeth. They use advanced techniques to treat the dental pulp and root tissues.</p>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                <div className='p-3 text-center border'>
                        <h3>Orthodontist</h3>
                        <p>An orthodontist is a dentist trained to diagnose, prevent, and treat teeth and jaw irregularities. They correct existing conditions and are trained to identify problems that may develop in the future. Orthodontists work with people of all ages, from children to adults.</p>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                <div className='p-3 text-center border'>
                        <h3>Periodontist</h3>
                        <p>A periodontist is a dentist who specializes in the prevention, diagnosis, and treatment of periodontal disease a chronic inflammatory disease that affects the gums and bone supporting the teeth also known as gum disease, and in the placement of dental implants.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quality;